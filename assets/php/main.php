<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ivitee";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Nama = $_POST["Nama"];
    $Kedatangan = ($_POST['Kedatangan'] == 'yes') ? 1 : 0;

    $sql = "INSERT INTO rsvp (Nama, Kedatangan) VALUES ('$Nama', '$Kedatangan')";

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

