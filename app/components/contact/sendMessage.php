<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST))
    $_POST = json_decode(file_get_contents('php://input'), true);

$firstname = $_POST['firstname'];
$lastname = $_POST['lasname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$looking = $_POST['looking'];
$budget = $_POST['budget'];
$comments = $_POST['comments'];

$to = 'markusmikely@gmail.com';
$subject = 'A new enquiry from'.$firstname.' '.$lastname;
$from = $email;

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Create email headers
$headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Compose a simple HTML email message
$message = '<html><body>';
$message .= '<h1 style="color:#f40;">Hi Tania!</h1>';
$message .= '<p style="color:#080;font-size:18px;">You have a new contact from your website</p>';
$message .= '<br><p style="color:#000;font-size:18px;">Name: '.$firstname.' '.$lastname.'</p>';
$message .= '<p style="color:#000;font-size:18px;">Email: '.$email.'</p>';
$message .= '<p style="color:#000;font-size:18px;">Telephone: '.$phone.'</p>';
$message .= '<p style="color:#000;font-size:18px;">Looking for: '.$looking.'</p>';
$message .= '<p style="color:#000;font-size:18px;">Budget: '.$budget.'</p>';
$message .= '<p style="color:#000;font-size:18px;">Comments:</p>';
// $message .= '<p style="color:#000;font-size:18px;">'.$comments.'</p>';
$message .= '</body></html>';

// Sending email
if(mail($to, $subject, $message, $headers)){
    echo 'Your mail has been sent successfully.';
} else{
    echo 'Unable to send email. Please try again.';
}

?>
