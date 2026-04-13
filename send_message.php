<?php
session_start();

if (isset($_POST['message'])) {
    $message = $_POST['message'] . PHP_EOL;

    if ($_SESSION["user"] == "user1") {
        $res = $_SESSION["user"] . ' : ' . $message;
    } else {
        $res = $_SESSION["user"] . ' : ' . $message;
    }

    file_put_contents("chat.txt", $res, FILE_APPEND);
}
?>
