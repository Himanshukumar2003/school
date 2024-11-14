<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $services = trim($_POST['services']);
    $date = trim($_POST['date']);
    $errors = [];

    if (empty($name)) {
        $errors[] = "Please enter your name.";
    }

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Please enter a valid email address.";
    }

    if (empty($services)) {
        $errors[] = "Please select a service.";
    }

    if (empty($date)) {
        $errors[] = "Please select a date.";
    }

    if (count($errors) === 0) {
        $to = "devliyalhimanshu@gmail.com"; 
        $subject = "New Appointment Booking";
        $message = "
        <html>
        <head>
            <title>New Appointment Booking</title>
        </head>
        <body>
            <h2>Appointment Details</h2>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Service:</strong> {$services}</p>
            <p><strong>Date:</strong> {$date}</p>
        </body>
        </html>";

        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: noreply@yourwebsite.com" . "\r\n"; 

        if (mail($to, $subject, $message, $headers)) {
            echo "<script>alert('Thank you! Your appointment has been booked.'); window.location.href = 'index.html';</script>";
        } else {
            echo "<p style='color:red;'>Failed to send email. Please try again later.</p>";
        }
    } else {
        foreach ($errors as $error) {
            echo "<p style='color:red;'>$error</p>";
        }
        echo "<script>window.history.back();</script>";
    }
}
?>
