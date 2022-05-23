<?php
require_once dirname(__FILE__) . "/../db_config.php";

$post = $_POST;

$sql = "SELECT * FROM CLUB Order by ClubID desc LIMIT 1";
$result = $con->query($sql);
$data = $result->fetch_assoc() or die($con->error);
$id = (int)$data['ClubID'] + 1;

$insert_sql = "INSERT INTO CLUB (ClubID, ClubName, Shortname, StadiumID, CoachID) 
	VALUES (".$id.", '".$post["clubName"]."', '".$post["shortName"]."', '".$post["stadiumID"]."', ".$post["coachID"].")";

if ($con->query($insert_sql)) {
    $result = $con->query($sql);
    $data = $result->fetch_assoc() or die($con->error);
    echo json_encode($data);
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($con);
};
