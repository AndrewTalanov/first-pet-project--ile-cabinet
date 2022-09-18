<?php

require_once "../config/database.php";

$database = new Database();
$db = $database->getConnection();

$name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
$id = filter_var(trim($_POST['id']), FILTER_SANITIZE_STRING);

$db->query("UPDATE folders SET name='$name' WHERE id=$id");

