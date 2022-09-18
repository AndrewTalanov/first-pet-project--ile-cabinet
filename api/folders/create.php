<?php

require_once "../config/database.php";

$database = new Database();
$db = $database->getConnection();

$name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
$user_id = $_COOKIE['user_id'];

$db->query("INSERT INTO `folders` (`user_id`, `name`) VALUES( '$user_id','$name')");
