<?php
    session_start();

    if (!empty($_SESSION['user'])){
        echo "logged";
        exit;
    }

    $content = file_get_contents("users.txt");

    if (in_array($_POST["user"],["user1","user2"]) && strpos($content, $_POST["user"]) === false){

        $_SESSION["user"]=$_POST["user"];
        
        file_put_contents("users.txt",$_POST["user"] . PHP_EOL, FILE_APPEND);

        echo "success";

        exit;
    }

    echo "error"; 
    setcookie(session_name(), "", time() - 3600, "/");
    session_destroy();