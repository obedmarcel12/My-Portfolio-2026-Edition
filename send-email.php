<?php
// Email configuration
$recipient_emails = array(
    "arinzegodfrey376@gmail.com",
    "obedmarcelcomedian@gmail.com"
);

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = isset($_POST["name"]) ? trim($_POST["name"]) : "";
    $email = isset($_POST["email"]) ? trim($_POST["email"]) : "";
    $message = isset($_POST["message"]) ? trim($_POST["message"]) : "";

    // Validate inputs
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Please fill out all fields"]);
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Invalid email address"]);
        exit;
    }

    // Prepare email content
    $subject = "New Portfolio Contact Form Submission from " . htmlspecialchars($name);
    
    $body = "You have received a new message from your portfolio website.\n\n";
    $body .= "Name: " . htmlspecialchars($name) . "\n";
    $body .= "Email: " . htmlspecialchars($email) . "\n";
    $body .= "Message:\n";
    $body .= htmlspecialchars($message) . "\n\n";
    $body .= "---\n";
    $body .= "This is an automated message from your portfolio contact form.\n";

    // Prepare headers
    $headers = "From: " . htmlspecialchars($email) . "\r\n";
    $headers .= "Reply-To: " . htmlspecialchars($email) . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send emails to both recipients
    $sent = false;
    foreach ($recipient_emails as $recipient) {
        if (mail($recipient, $subject, $body, $headers)) {
            $sent = true;
        }
    }

    if ($sent) {
        http_response_code(200);
        echo json_encode([
            "success" => true,
            "message" => "Message sent successfully! I'll get back to you soon."
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Failed to send email. Please try again later."
        ]);
    }
    exit;
} else {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}
?>
