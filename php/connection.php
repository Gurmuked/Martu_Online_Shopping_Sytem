 <?php

$servername = "localhost"; // Change if needed
$username = "root"; // Replace with your DB username
$password = '';
$dbname = "web_database"; // Database name
$port = "3307";

$conn = mysqli_connect($servername, $username, $password, $dbname, $port);
if (!$conn) {
    die("Connection failed: ");
}

?> 