<?php

require_once "../config/database.php";

$database = new Database();
$db = $database->getConnection();

$user_id = filter_var(trim($_POST['user_id']), FILTER_SANITIZE_STRING);
$folder_id = filter_var(trim($_POST['folder_id']), FILTER_SANITIZE_STRING);

if ($_COOKIE['user_id'] == $user_id) {
    
    $folder_id = $_POST['folder_id'];

    setcookie('folder_id', $folder_id, time() + 3600, "/");

    $req = $db->query("SELECT * FROM `books` WHERE `folder_id` = $folder_id");

    $data = [];
    while($row = $req->fetch()){
        array_push($data, $row);
    }

    print_r( json_encode($data) );

} else {
    echo "что то пошло не так";
}
