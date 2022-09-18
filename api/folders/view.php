<?php

require_once "../config/database.php";

$database = new Database();
$db = $database->getConnection();

setcookie('folder_id', $folder_id, time() - 36000, "/");

$user_id = $_POST['user_id'];

$req = $db->query("SELECT * FROM `folders` WHERE `user_id` = $user_id");

$data = [];
while($row = $req->fetch()){
    array_push($data, $row);
}

print_r( json_encode($data) );