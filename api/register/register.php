<?php

require_once "../config/database.php";

$database = new Database();
$db = $database->getConnection();

$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
$password = filter_var(trim($_POST['password']), FILTER_SANITIZE_STRING);
$name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);

if (mb_strlen($login) > 20) {
    echo 'Слишком длинный логин';
    exit();
} else if (mb_strlen($password) > 20) {
    echo 'Слишком длинный пароль';
    exit();
}

$hash = password_hash($password, PASSWORD_DEFAULT);

$req = $db->prepare("SELECT * FROM `users` WHERE `login` = '$login'");
$req->execute();
$req = $req->fetch(PDO::FETCH_ASSOC);

if ($req) {
    echo "Такой пользователь уже есть";
    exit();
} 

$db->query("INSERT INTO `users` (`login`, `password`, `name`) VALUES('$login', '$hash', '$name')");
echo "Успешный успех";
exit();