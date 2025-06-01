<?php

session_start(); 

include "./connection.php"; 

if (isset($_POST['submit'])) {

    $email = $_POST['email'];
    $password= $_POST['password'];

    $result = mysqli_query($conn, "SELECT * FROM signup WHERE Email = '$email'");

    if ($result && mysqli_num_rows($result) > 0) {
      $row = mysqli_fetch_assoc($result);
      

      if (Password-verify($hashedPassword, $row['Passsword'])) {
        
          $_SESSION['email'] = $email;
            header("Location: https://t.me/@Gurmu1");

        } else {
            echo "<script>alert('Invalid password!');</script>";
        }
    } else {
        echo "<script>alert('First you must registered!');</script>";
    }
}
?>
