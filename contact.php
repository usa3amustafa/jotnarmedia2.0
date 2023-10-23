<?php

$messageSent = false;

if (isset($_POST['email']) && $_POST['email'] != '') {

    if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        // Process the form
        $first_name = $_POST['first-name'];
        $last_name = $_POST['last-name'];
        $email = $_POST['email'];
        $userMessage = $_POST['message'];

        // $to = 'charles@chargechocolate.com, anotheremail@example.com';
        $to = 'umustafa755@gmail.com';
        $subject = 'New Message from ' . $name;  // You missed the $subject definition in your code, added it here
        $body = '';

        $body .= 'From: ' . $name . "\r\n";
        $body .= 'Email: ' . $email . "\r\n";
        $body .= 'Phone #: ' . $phone . "\r\n";
        $body .= 'Message: ' . $userMessage . "\r\n";

        mail($to, $subject, $body);

         // Redirect to thankyou.html after successful submission
    header('Location: thankyou.html');
    exit;
    }
}

// If redirected back with a successful message sent query param, set the $messageSent variable
if (isset($_GET['messageSent']) && $_GET['messageSent'] == 'true') {
    $messageSent = true;
}

if ($messageSent) {
  # code...
  $name = '';
  $email = '';
  $phone = '';
  $userMessage = '';
}

?>
