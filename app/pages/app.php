<?php 

if (isset($_COOKIE['user']) == false) {
    header('Location: /');  
}

?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/normalize.css">
    <link rel="stylesheet" href="../assets/css/style.css">
    <title>My File Cabinet</title>
</head>
<body>
    <main>
        <div class="header">
            <div class="header-item header-home">
                <div class="header-item-content">
                    <img src="../assets/image/home.svg" alt="home">
                    <p>Главная</p>
                </div>
            </div>
            <div class="header-item">
                <a class="header-item-content" href="http://my-file-cabinet/api/exit/exit.php">
                    <img src="../assets/image/back.svg" alt="exit">
                   <span>Выход</span>
                </a>
            </div>
        </div>
        <div class="content">
            <div class="content-header">
                <div class="user-info">
                    <h2>Пользователь: <?php echo $_COOKIE['user'] ?></h2>
                </div>
                <button class="btn btn-open-modal js-btn-open-create-folder">Создать папку</button>
                <button class="btn btn-open-modal js-btn-open-create-file">Создать файл</button>
            </div>
            <div class="content-main">

                <div class="nothing-list">
                    <img src="../assets/image/nothing.png" alt="nothing">
                    <p>Здесь пока ничего нет</p>
                </div>

                <div class="js-lists"></div>

                <form class="wrapper-modal">
                    <div class="modal-create-folder">
                        <h2>Введите название папки:</h2>
                        <input type="text" name="name">
                        <div class="btns">
                            <button type="submit" class="btn">Добавить папку</button>
                            <button type="button" class="btn btn-red close-modal-create-folder">Отмена</button>
                        </div>
                    </div>
                </form>

                <form class="modal-create-file">
                    <div class="content-create-file">
                        <fieldset>
                            <legend>Заголовок</legend>
                            <input name="title" class="" type="text" placeholder="Заголовок">
                        </fieldset>   
                        <fieldset>
                            <legend>Подзаголовок</legend>
                            <input name="under_title" class="" type="text" placeholder="Подзаголовок">
                        </fieldset>   
                        <fieldset class="fieldset-for-textarea">
                            <legend>Текст</legend>
                            <textarea name="content" placeholder="текст"></textarea>
                        </fieldset>   
                        <button class="btn js-sumbit-close" type="submit">Создать файл</button>
                        <button class="btn btn-red js-btn-close" type="button">Закрыть</button>
                    </div>
                </form>                

                <div class="js-modal-create-folder"></div>
                <div class="js-open-file"></div>
                <div class="js-edit-file"></div>
            </div>
            
            <!-- <br> -->
            
            <!-- создание папки/файла -->
            <!-- <div class="js-input"></div> -->
            <!-- контент -->
            <!-- <div class="js-wrapper"></div> -->
            <!-- <div class="js-modal"></div> -->
        </div>
    </main>
    <script type="module" src="../../app/app.js"></script>
</body>
</html>