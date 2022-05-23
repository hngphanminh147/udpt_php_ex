<?php
require_once dirname(__FILE__)."/../db_config.php";

$playerId  = $_POST["playerId"];
$fullName = $_POST["fullName"];
$clubId = $_POST["clubId"];
$dob = $_POST["dob"];
$position = $_POST["position"];
$nationality = $_POST["nationality"];
$number = $_POST["number"];

$sql = "UPDATE PLAYER 
    SET fullName = '".$fullName."', 
        clubId = ".$clubId.", 
        dob = '".$dob."' , 
        position = '".$position."', 
        nationality = '".$nationality."', 
        number = '".$number."' 
    WHERE playerId = ".$playerId;

$result = $con->query($sql);

echo json_encode($result);
