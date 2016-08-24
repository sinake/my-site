<?php 
  
  //Turning on error reporting
  //error_reporting(-1);
  //ini_set('display_errors', 'On');
  //set_error_handler("var_dump");
  
  if(isset($_POST['submit'])) {

    //Email information
    $admin_email = "asifrmemon@gmail.com";
    $email = $_POST['email'];
    $subject = $_POST['subject']." *From Your Website*";
    $message = $_POST['message'];
    $headers = "From: ".$admin_email."\r\n".
    'Reply-To: '.$email;

    //send email
    mail($admin_email, $subject, $message, $headers);
    
    //Email response
    echo "Thank you for contacting us!";

  } 

?>