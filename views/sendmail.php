<?php
  $email = $_REQUEST['email'] ;
  $message = $_REQUEST['message'] ;

  mail( "clrnessler@gmail.com", "Feedback Form Results",
    $message, "From: $email" );
  header( "Location: http://www.localhost3000" );
?>
