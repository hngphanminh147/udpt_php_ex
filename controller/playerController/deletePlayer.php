<?php
require_once dirname(__FILE__) . "/../db_config.php";

if (isset($_POST["PlayerID"])) {
    $id = $_POST["PlayerID"];
    $sql = "DELETE FROM PLAYER WHERE PlayerID = '".$id."'";

    if ($result = $con->query($sql)) {
        echo json_encode($id);
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($con);
    }
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($con);
}

