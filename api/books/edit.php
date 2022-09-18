<?php

require_once "../config/database.php";

$database = new Database();
$db = $database->getConnection();

$title = filter_var(trim($_POST['title']), FILTER_SANITIZE_STRING);
$under_title = filter_var(trim($_POST['under_title']), FILTER_SANITIZE_STRING);
$content = filter_var(trim($_POST['content']), FILTER_SANITIZE_STRING);
$user_id = filter_var(trim($_POST['user_id']), FILTER_SANITIZE_STRING);
$file_id = filter_var(trim($_POST['file_id']), FILTER_SANITIZE_STRING);

$db->query("UPDATE books SET title='$title', under_title='$under_title', content='$content' WHERE id=$file_id");

