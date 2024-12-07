<?php
include 'db.php';

$sql = "SELECT * FROM category";
$stmt = $conn->prepare($sql);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

$conn = null;

return $result;
?>