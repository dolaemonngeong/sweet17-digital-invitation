<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ivitee";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $message = $_POST["message"];

    $sql = "INSERT INTO wishes (name, message) VALUES ('$name', '$message')";

        if ($conn->query($sql) === TRUE) {
            // Redirect user back to the same page
            header("Location: index.html");
            exit(); // Important to stop the script after redirecting
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
 }

$conn->close();
?>