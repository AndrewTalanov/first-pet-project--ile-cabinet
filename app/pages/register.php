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
    <link rel="stylesheet" href="../assets/css/normalize.css">

    <link rel="stylesheet" href="../assets/css/login.css">

    <title>My File Cabinet</title>
</head>
<body>
    <main>
        <div class="login">

            <img class="decore img-1" src="../assets/image/decor.svg" alt="decor img">
            <img class="decore img-2" src="../assets/image/decor.svg" alt="decor img">
            <img class="decore img-3" src="../assets/image/decor.svg" alt="decor img">
            
            <img class="decore-main-img" src="../assets/image/rafiki.png" alt="decor img">

            <form class="js-register">
                <h2>Регистрация</h2>

                <fieldset>
                    <legend>Логин</legend>
                    <input class="" type="text" name="login">
                </fieldset>   
                <fieldset>
                    <legend>Пароль</legend>
                    <input class="" type="password" name="password">
                </fieldset>   
                <fieldset>
                    <legend>ФИО</legend>
                    <input class="" type="text" name="name">
                </fieldset>   
                <p class="js-status-reg"></p>
                <button type="submit" name="submit">Регистрация</button>
                <a href="http://my-file-cabinet/">Войти</a>
            </form>
        </div> 
    </main>

    <script type="module" src="../login/register.js"></script>
</body>
</html>