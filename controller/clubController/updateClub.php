<?php
require_once dirname(__FILE__)."/../db_config.php";

$clubId  = (int)$_POST["clubId"];
$clubName = $_POST["clubName"];
$shortName = $_POST["shortName"];
$stadiumID = $_POST["stadiumID"];
$coachID = (int)$_POST["coachID"];

$sql = "UPDATE club 
    SET clubName = '".$clubName."'
        ,shortName = '".$shortName."'
        ,stadiumID = '".$stadiumID."'
        ,coachID = ".$coachID." 
    WHERE clubId = ".$clubId;

$result = $con->query($sql);

echo json_encode($result);
