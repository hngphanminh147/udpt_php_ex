<?php
session_start();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script src="../js/jquery.min.js"></script>
    <script src="../js/jquery.twbsPagination.min.js"></script>
    <script src="../js/constant.js"></script>
    <script src="../js/action.js"></script>
    <script src="../js/main.js"></script>

    <title>Football</title>

    <link type="text/css" rel="stylesheet" href="../css/style.css"/>

</head>

<body>
<header class="header">
    <div class="header-con">
        <a href="#" class="logo">
            <img id="logo" src="img\football-icon.png">
            <a style="margin-top: 20px; margin-left: 5px">Football</a>
        </a>
        <nav id='navigation'>
            <ul>
                <li>
                    <a class="nav-items" id="nav-player-list">Player List</a>
                    <a class="nav-items" id="nav-club-list">Club List</a>
                    <a class="nav-items" id="nav-player-search">Search Player</a>
                    <a class="nav-items" id="nav-add-club">Add Club</a>
                    <a class="nav-items" id="nav-add-player">Add Player</a>
                    <a class="nav-items" id="nav-update-club">Update Club</a>
                    <a class="nav-items" id="nav-update-player">Update Player</a>
                    <a class="nav-items" id="nav-delete-player">Delete Player</a>
                    <a class="nav-items" id="nav-introduction">Introduction</a>
                </li>
            </ul>
        </nav>
    </div>
</header>


