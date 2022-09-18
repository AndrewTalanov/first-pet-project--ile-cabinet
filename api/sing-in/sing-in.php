<?php

require_once "../config/database.php";

$database = new Database();
$db = $database->getConnection();

$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
$password = filter_var(trim($_POST['password']), FILTER_SANITIZE_STRING);



$user = $db->prepare(" SELECT * FROM `users` WHERE `login` = '$login'");
$user->execute();
$user = $user->fetch(PDO::FETCH_ASSOC);

if (count($user) == 0) {
    echo "Такого пользователя нет";
    exit();
}

$hash = $user['password'];

if (password_verify($password, $hash)) {
    setcookie('user', $user['name'], time() + 3600, "/");
    setcookie('user_id', $user['id'], time() + 3600, "/");
    echo "Вы вошли в аккаунт!";
    exit();
}

echo "Неверный пароль";
exit();