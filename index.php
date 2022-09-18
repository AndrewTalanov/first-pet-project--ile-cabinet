<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link type="image/x-icon" href="/favicon.ico" rel="shortcut icon">
    <link type="Image/x-icon" href="/favicon.ico" rel="icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./app/assets/css/normalize.css">

    <link rel="stylesheet" href="./app/assets/css/login.css">

    <title>My File Cabinet</title>
</head>
<body>
    <main>
        <div class="login">

            <img class="decore img-1" src="app/assets/image/decor.svg" alt="decor img">
            <img class="decore img-2" src="app/assets/image/decor.svg" alt="decor img">
            <img class="decore img-3" src="app/assets/image/decor.svg" alt="decor img">
            
            <img class="decore-main-img" src="app/assets/image/rafiki.png" alt="decor img">
            
            <form class="js-sing-in">
                <h2>Вход</h2>
                <h3>Запомни важное!</h3>
                <fieldset>
                    <legend>Логин</legend>
                    <input class="" type="text" name="login">
                </fieldset>
                <fieldset>
                    <legend>Пароль</legend>
                    <input class="" type="text" name="password">
                </fieldset>            
                <p class="js-status-log"></p>
                <button type="submit" name="submit">Войти</button>
                <a href="app/pages/register.php">Зарегистрироваться</a>
            </form>
        </div> 
    </main>

    <script type="module" src="./app/login/sing-in.js"></script>
</body>
</html>