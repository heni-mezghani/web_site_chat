<?php
    session_start();

    $users = file("users.txt", FILE_IGNORE_NEW_LINES);
    
    $filteredUsers = array_filter($users,function($u) {

        return $u !== $_SESSION["user"];

    });

    file_put_contents("users.txt", implode(PHP_EOL, $filteredUsers) . PHP_EOL);

    file_put_contents("chat.txt", "");
    
    setcookie(session_name(), "", time() - 3600, "/");

    header("Location: login.html");

    session_destroy();