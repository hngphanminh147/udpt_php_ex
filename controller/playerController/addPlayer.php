<?php
require_once dirname(__FILE__)."/../db_config.php";

$post = $_POST;

$sql = "SELECT * FROM PLAYER Order by PlayerID desc LIMIT 1";
$result = $con->query($sql);
$data = $result->fetch_assoc() or die($con->error);
$id = (int)$data['PlayerID'] + 1;

$insert_sql = "INSERT INTO PLAYER (PlayerID, FullName, ClubID, DOB, Position, Nationality, Number) 
	VALUES (".$id.",'".$post['fullName']."',".$post['clubId'].",'".$post['dob']."','".$post['position']."','".$post['nationality']."','".$post['number']."')";

if ($con->query($insert_sql)) {
    $result = $con->query($sql);
    $data = $result->fetch_assoc() or die($con->error);
    echo json_encode($data);
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($con);
};


