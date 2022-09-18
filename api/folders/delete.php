<?php

require_once "../config/database.php";

$database = new Database();
$db = $database->getConnection();

$user_id = filter_var(trim($_POST['user_id']), FILTER_SANITIZE_STRING);
$folder_id = filter_var(trim($_POST['folder_id']), FILTER_SANITIZE_STRING);

if ($_COOKIE['user_id'] == $user_id) {
    $req = $db->query("DELETE FROM `folders` WHERE `id` = $folder_id");
    echo "ok";
} else {
    echo "что то пошло не так";
}

