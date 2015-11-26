<?php
  
  if(isset($_POST['submit'])) {

    //Email information
    $admin_email = "asifrmemon@gmail.com";
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $headers = "From: $admin_email \r\n";
    $headers .= "Reply-To: $email \r\n";
    
    //send email
    mail($admin_email, $subject, $message, $headers);
    
    //Email response
    echo "Thank you for contacting us!";
  
  }

?>