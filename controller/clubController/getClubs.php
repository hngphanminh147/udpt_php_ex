<?php
require_once dirname(__FILE__)."/../db_config.php";

if (isset($_GET["pageSize"])){
    $num_rec_per_page = $_GET["pageSize"];
    if (isset($_GET["page"])) {
        $page  = $_GET["page"];
    } else {
        $page = 1;
    };

    $start_from = ($page - 1) * $num_rec_per_page;

    $where = array();
    $where[] = " 1 = 1 ";
    if (isset($_GET["clubId"])) {
        $where[] = " `clubId` = '".$_GET["clubId"]."' ";
    }
    $where_clause = implode(" AND ", $where);

    $sqlTotal = "SELECT * FROM club";
    $sql = "SELECT * FROM club WHERE $where_clause ORDER BY ClubID DESC LIMIT $start_from, $num_rec_per_page";
    $result = $con->query($sql);

    while($row = $result->fetch_assoc()){
        $json[] = $row;
    }

    $data['data'] = $json;
    $result =  mysqli_query($con,$sqlTotal);
    $data['total'] = mysqli_num_rows($result);

    echo json_encode($data);
} else {
    $sql = "SELECT * FROM club";
    $result = $con->query($sql);

    while($row = $result->fetch_assoc()){
        $json[] = $row;
    }
    $data['data'] = $json;
    echo json_encode($data);
}

