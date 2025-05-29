<?php
include "./connection.php";

if (isset($_POST['submit'])) {
    $firstName =$_POST["name"];
    $email =$_POST["email"];
    $mobile =$_POST["mobile"];
    $message =$_POST["message"];

        $sql = "INSERT INTO feedback (first_name, email, mobile, message) 
                 VALUES ('$firstName', '$email','$mobile', '$message')";
        $result = mysqli_query($conn,  $sql);
        if ($result) {
            echo "<script> alert('Successfully sent'); </script>";
            header("Location: ../structure/contact.php");
        } else {
          echo "<script> alert('Couldn't sent the message'); </script>";
        }

    } 

?>
