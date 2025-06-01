<?php
include "./connection.php"; 


if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm-password'];

    if ($password !== $confirm_password) {
        echo "<script> alert('Passwords do not match!')</script>";
    } else {

        $result = mysqli_query($conn, "SELECT * FROM signup WHERE email = '$email'");

        if ($result && mysqli_num_rows($result) > 0) {
            echo "<script> alert('Email already exists!')</script>";
        } else {

            $sql = "INSERT INTO signup (Name, Email, Passsword) VALUES ('$name', '$email', '$password ')";

            if (mysqli_query($conn, $sql)) {
                echo "<script> alert('Account created successfully!');</script>";
                header("Location: ../structure/index.php");
            } else {
                echo "<script> alert('Account not created successfully!')</script>";
            }
        }
    }
}
?>