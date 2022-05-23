<?php
require_once dirname(__FILE__) . "/../db_config.php";

if (isset($_GET["pageSize"])) {
    $num_rec_per_page = $_GET["pageSize"];
    if (isset($_GET["page"])) {
        $page = $_GET["page"];
    } else {
        $page = 1;
    };
    $start_from = ($page - 1) * $num_rec_per_page;

    $where = array();
    $where[] = " 1 = 1 ";
//    GET UPDATE FORM DATA
    if (isset($_GET["playerId"])) {
        $where[] = " `playerId` = ".$_GET["playerId"]." ";
    }

//    ADVANCED SEARCH
    if (isset($_GET["fullName"]) && $_GET["fullName"] != "") {
        $where[] = " `fullName` = '".$_GET["fullName"]."' ";
    }
    if (isset($_GET["clubId"]) && $_GET["clubId"] != "") {
        $where[] = " `clubId` = ".$_GET["clubId"]." ";
    }
    if (isset($_GET["position"]) && $_GET["position"] != "") {
        $where[] = " `position` = '".$_GET["position"]."' ";
    }
    if (isset($_GET["nationality"]) && $_GET["nationality"] != "") {
        $where[] = " `nationality` = '".$_GET["nationality"]."' ";
    }
    if (isset($_GET["number"]) && $_GET["number"] != "") {
        $where[] = " `number` = '".$_GET["number"]."' ";
    }
    $where_clause = implode(" AND ", $where);

    $sqlTotal = "SELECT * FROM player";
    $sql = "SELECT * 
            FROM player 
            WHERE $where_clause
            ORDER BY PlayerID DESC 
            LIMIT $start_from, $num_rec_per_page";
    $result = $con->query($sql);

    while ($row = $result->fetch_assoc()) {
        $json[] = $row;
    }

    $data['data'] = $json;
    $result = mysqli_query($con, $sqlTotal);
    $data['total'] = mysqli_num_rows($result);

    echo json_encode($data);
} else {
    $sql = "SELECT * FROM player";
    $result = $con->query($sql);

    while ($row = $result->fetch_assoc()) {
        $json[] = $row;
    }
    $data['data'] = $json;
    echo json_encode($data);
}

