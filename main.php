<?php 
  
  //Turning on error reporting
  // error_reporting(-1);
  // ini_set('display_errors', 'On');
  // set_error_handler("var_dump");

  //if form is submitted.
  if(isset($_POST['submit'])) {

    //if captcha response is given
    if(isset($_POST['g-recaptcha-response']) && $_POST['g-recaptcha-response']) {

      //test the captcha response for correctness.
      $secret = "6LfkIBEUAAAAAD1SyJeqyBYu-NhyzPvWr4UpkVtM";
      $captcha_response = $_POST['g-recaptcha-response'];
      $verify_url = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$captcha_response");
      $json_array = json_decode($verify_url,TRUE);
      
      //if json_array contains a true response to the success key.
      if($json_array['success']) {
        
        //Email information
        $admin_email = "asifrmemon@gmail.com";
        $email = $_POST['email'];
        $subject = $_POST['subject']." *From Your Website*";
        $message = $_POST['message'];
        $headers = "From: ".$admin_email."\r\n".
        'Reply-To: '.$email;

        //send email
        mail($admin_email, $subject, $message, $headers);

      }
    }
  } 

?>