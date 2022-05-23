<?php
require_once dirname(__FILE__) . "/../db_config.php";

$sql = "SELECT * FROM STADIUM";
$result = $con->query($sql);

while ($row = $result->fetch_assoc()) {
    $json[] = $row;
}
$data['data'] = $json;
echo json_encode($data);

