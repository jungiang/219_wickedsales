<?php
    require_once('functions.php');
    set_exception_handler('handleError');
    require_once('config.php');
    require_once('mysqlconnect.php');

    if(empty($_SESSION['cart_id'])){
        throw new Exception('Missing cart id');
    }

    $cart_id = $_SESSION['cart_id'];

    $query = "SELECT c.`created`, c.`total_price`, `ci`.`quantity`, p.`id`, p.`name`, p.`price`, (SELECT url FROM `images` AS i WHERE i.`products_id`=p.`id` LIMIT 1) AS image FROM `carts` AS c JOIN cart_items AS ci ON c.`id`=ci.`carts_id` JOIN `products` AS p ON ci.`products_id`=p.`id` WHERE c.`id` = 1";

    $result = mysqli_query($conn, $query);

    if(!$result){
        throw new Exception('invalid query: '.mysqli_error($conn));
    }

    if(!mysqli_num_rows($result)){
        throw new Exception('Unable to retrieve cart data');
    }

    //Using new stdClass Object (pointless, A.Array shows as Object)
    // $cartItems = [];
    // $cartMetaData = new stdClass();
    // while($row = mysqli_fetch_assoc($result)){
    //     $cart_item = new stdClass();
    //     $cart_item->name = $row['name'];
    //     $cart_item->price = (int)$row['price'];
    //     $cart_item->images = $row['image'];
    //     $cart_item->quantity = (int)$row['quantity'];
    //     $cart_item->id = (int)$row['id'];
    //     $cartItems[] = $cart_item;
    //     $cartMetaData->created = $row['created'];
    //     $cartMetaData->total_price = $row['total_price'];
    // }
    // $output = [
    //     'success'=>true,
    //     'cartItems'=>$cartItems,
    //     'cartMetaData'=>$cartMetaData
    // ];

    $output['success'] = false;

    while($row = mysqli_fetch_assoc($result)){
        $output['cartItems'][] = [
            'name' => $row['name'],
            'price' => $row['price'],
            'image' => $row['image'],
            'quantity' => $row['quantity'],
            'id' => $row['id'],
        ];
        $output['cartMetaData']['created'] = $row['created'];
        $output['cartMetaData']['total'] = $row['total_price'];
    }

    $output['success'] = true;

    $json_output = json_encode($output);
    print($json_output);
?>