<?php
// Check if the form is submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $services = $_POST['services'];
    $date = $_POST['date'];
    
    // Email details
    $to = "devliyalhimanshu@gmail.com";
    $subject = "New Appointment Request";
    $message = "You have received a new appointment request.\n\n";
    $message .= "Name: " . htmlspecialchars($name) . "\n";
    $message .= "Email: " . htmlspecialchars($email) . "\n";
    $message .= "Service: " . htmlspecialchars($services) . "\n";
    $message .= "Date: " . htmlspecialchars($date) . "\n";
    
    // Headers for email
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Appointment booked successfully! We will contact you soon.";
    } else {
        echo "Failed to send appointment request. Please try again.";
    }
} else {
    // Redirect to form page if accessed directly
    header("Location: index.html");
    exit();
}