<?php
$host = "dpg-ct6g6t9opnds73dfea9g-a.oregon-postgres.render.com";
$port = "5432";
$dbname = "panes_de_la_ruminahui";
$username = "panes_de_la_ruminahui_user";
$password = "UgjYcnlgcs6W4E016aLU3uy05Xba0LZP";

$conn = new PDO("pgsql:host=$host;dbname=$dbname", $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if (!$conn) {
    die("Connection failed: " . pg_last_error());
}
?>