<?php

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'simon.kleiss@gmail.com';                     // SMTP username
    $mail->Password   = 'eagleone0227';                               // SMTP password
    $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 587;                                    // TCP port to connect to

    //Recipients
    $expediteur = $_POST['email'];
    $mail->setFrom($expediteur);
    $mail->AddReplyTo($expediteur, 'expediteur');
    $mail->addAddress('simon.kleiss@gmail.com', 'mail de celui qui recoi le mail');     // Add a recipient
    

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Messsage de votre portfolio';
    $mail->Body    = $_POST['message'];
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    header('refresh: 3;url= index.html');
    echo '<h1 style="text-align:center;">Votre email a bien été envoyé à Simon KLEISS</h1>';
} catch (Exception $e) {
    echo "Email Error: {$mail->ErrorInfo}";
}