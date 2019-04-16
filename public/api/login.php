<?php
    require_once('functions.php');
    set_exception_handler('handleError');
    require_once('config.php');
    require_once('mysqlconnect.php');

    $output['success'] = false;

    $json_input = file_get_contents("php://input");

    $input = json_decode($json_input, true);

    if(empty($input['email'])){
        throw new Exception('email is a required value');
    }

    if(empty($input['password'])){
        throw new Exception('password is a required value');
    }

    $email = $input['email'];
    // $email = addslashes($email);//quick sanitize: \' now it's just a apostrophe
    $password = $input['password'];//no need to santize since it gets hashed anyway
    $hashedPassword = sha1($password);

    unset($input['password']);//get rid of password since it's dangerous

    $query="SELECT `id`, `name` FROM `users` WHERE `email`= ? AND `password`= ?";

    $statement = mysqli_prepare($conn, $query);//send the safe query to the DB (added ?)
    mysqli_stmt_bind_param($statement, 'ss', $email, $hashedPassword);//send the dangerous data to the DB
    $result = mysqli_stmt_execute($statement);//tell the DB to mix the query and the data
    $result = mysqli_stmt_get_result($statement);//get the result pointer for the prepared query statement's data; use result as normal

    // $result = mysqli_query($conn, $query); unsafe method -> USE PREPARED STATEMENT

    if(!$result){
        throw new Exception('invalid query:', mysqli_error($conn));
    }

    if(mysqli_num_rows($result) !== 1){
        throw new Exception('invalid username or password');
    }

    $data = mysqli_fetch_assoc($result);
    $token = $email.$data['id'].microtime();
    $token = sha1($token);

    $connect_query = "INSERT INTO `user_connections` SET `token`='$token', `users_id`= {$data['id']}, `created` = NOW(), `ip_address` = '{$_SERVER['REMOTE_ADDR']}'";

    $connect_result = mysqli_query($conn, $connect_query);

    if(!$connect_result){
        throw new Exception('invalid query:', mysqli_error($conn));
    }

    if(mysqli_affected_rows($conn) !== 1){
        throw new Exception('failed to log in: connection not saved');
    }

    $_SESSION['user_data'] = [
        'id'=>$data['id'],
        'username'=>$data['name'],
        'token'=>$token
    ];

    $output['success'] = true;
    $output['username'] = $data['name'];
    $output['token'] = $token;

    $json_output = json_encode($output);
    print($json_output);
?>