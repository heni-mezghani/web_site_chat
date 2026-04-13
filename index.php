<?php
    if (!isset($_COOKIE["PHPSESSID"])){
        header("Location: login.html");
        exit();
    }
    else{
        header("Location: chat.html");
        exit();
    }