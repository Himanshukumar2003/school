<?php
if (isset($_POST['submit'])) {
    $con_fname = trim($_POST['firstn']);
    $con_lname = trim($_POST['lastn']);
    $con_email = trim($_POST['email']);
    $con_subject = trim($_POST['subject']);
    $con_message = trim($_POST['message']);

    if (strlen($con_fname) < 3 || strlen($con_lname) < 3 || !filter_var($con_email, FILTER_VALIDATE_EMAIL) || empty($con_subject) || empty($con_message)) {
        echo "<script>alert('Please fill out the form correctly.'); window.history.back();</script>";
        exit;
    }

    $to = 'devliyalhimanshu@gmail.com';
    $subject = "classicsteelcraft Contact Form Details";
    $message = "<html><head><title>classicsteelcraft Contact Form Details</title></head><body>";
    $message .= "<p><b>First Name:</b> $con_fname</p>";
    $message .= "<p><b>Last Name:</b> $con_lname</p>";
    $message .= "<p><b>Email:</b> $con_email</p>";
    $message .= "<p><b>Subject:</b> $con_subject</p>";
    $message .= "<p><b>Message:</b> $con_message</p></body></html>";

    $headers = "From: Sendermail\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "<script>alert('Thank you for submitting the form.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Something went wrong. Please try again later.'); window.location.href='index.html';</script>";
    }
}
?>
