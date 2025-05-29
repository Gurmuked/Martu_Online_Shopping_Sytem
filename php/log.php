<?php

session_start(); 

include "./connection.php"; 

if (isset($_POST['submit'])) {

    $username = $_POST['username'];
    $password = $_POST['password'];

    $result = mysqli_query($conn, "SELECT * FROM signup WHERE Name = '$username'");

    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        

        if (password_verify($password, $row['Passsword'])) {

            $_SESSION['username'] = $username;
            header("Location: ../structure/index.php");
        } else {
            echo "<script>alert('Invalid password!');</script>";
            header("Location: ../structure/login.php");
        }
    } else {
        echo "<script>alert('User not found!');</script>";
    }
}
?>