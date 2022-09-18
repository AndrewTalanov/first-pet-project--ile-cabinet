<?php

require_once "../config/database.php";

$database = new Database();
$db = $database->getConnection();

$title = filter_var(trim($_POST['title']), FILTER_SANITIZE_STRING);
$under_title = filter_var(trim($_POST['under_title']), FILTER_SANITIZE_STRING);
$content = filter_var(trim($_POST['content']), FILTER_SANITIZE_STRING);
$user_id = $_COOKIE['user_id'];
$folder_id = $_COOKIE['folder_id'];

$db->query("INSERT INTO `books` (`user_id`, `folder_id`, `title`, `under_title`, `content`) VALUES( '$user_id','$folder_id', '$title', '$under_title', '$content')");