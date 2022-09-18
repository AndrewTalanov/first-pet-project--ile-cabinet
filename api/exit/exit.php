<?php

setcookie('user', $user['user'], time() - 36000, "/");
setcookie('user_id', $user['id'], time() - 36000, "/");
setcookie('folder_id', $folder_id, time() - 36000, "/");
header('Location: /');