<?php
session_start();

// unset($_SESSION['user'])); if you want data even after user is logged out

session_destroy();

print(json_encode(['success' => true]));
?>