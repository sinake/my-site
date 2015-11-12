<?php
  //if "email" variable is filled out, send email
  if (isset($_REQUEST['email']))  {
  
  //Email information
  $admin_email = "asifrmemon@gmail.com";
  $email = $_REQUEST['email'];
  $subject = $_REQUEST['subject'];
  $message = $_REQUEST['message'];
  
  //send email
  mail($admin_email, "$subject", $message, "From:" . $email);
  
  //Email response
  echo "Thank you for contacting us!";
  }
  
  //if "email" variable is not filled out, display the form
  else  {
?>