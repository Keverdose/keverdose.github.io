<?php
require('PHPMailerAutoload.php');
require('class.phpmailer.php');
require('class.smtp.php');

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$type = $_POST['type'];
$message = $_POST['message'];

$mail = new PHPMailer(); // create a new object
$mail->IsSMTP(); // enable SMTP
//$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for GMail
$mail->Host = "smtp.gmail.com";
$mail->Port = 587; // or 587
$mail->IsHTML(true);
$mail->Username = getenv('MY_EMAIL');
$mail->Password = getenv('MY_PASSWORD');
$mail->SetFrom(getenv('MY_EMAIL'), "Kevin.ye Contact Form");
$mail->Subject = "KY.com: $type";
$mail->Body = 'From: ' . $name . "<br>" . 'Email: ' . $email . "<br>" . 'Phone: ' . $phone . "<br>" . 'Website: ' . $website . "<br>" . 'Reason: ' . $type . "<br>" . 'Message: ' . "<br>" . nl2br($message);
$mail->AddAddress(getenv('TO_EMAIL'));
 if(!$mail->Send())
 {
     echo "Message could not be sent.";
 } 
 else
 {
     echo "Message send was successful.";
 }

?>
