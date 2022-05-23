$(document).ready(($) => {
    const pageSize = 10;
    let page = 1;
    let currentPage = 1;
    let totalPage = 0;

    console.log(new Date())

    managePlayerData(page, pageSize);

    //NAV
    $("#nav-player-list").click(() => {
        $("#page-content").load("view/component/tableView.php")
        managePlayerData(page, pageSize)
    })

    $("#nav-club-list").click(() => {
        $("#page-content").load("view/component/tableView.php")
        manageClubData(page, pageSize)
    })

    $("#nav-player-search").click(() => {
        $("#page-content").load("view/component/searchLayout.php")
        setPlayerTableHeader("#table-content thead")
        prepareFormClub()
    })

    $("#nav-add-club").click(() => {
        $("#page-content").load("view/component/addClubView.php")
        prepareFormStadium()
        prepareFormCoach()
    })

    $("#nav-add-player").click(() => {
        $("#page-content").load("view/component/addPlayerView.php")
        prepareFormClub()
    })

    $("#nav-update-club").click(() => {
        $("#page-content").load("view/component/updateClubView.php")
        prepareFormClub()
        prepareFormStadium()
        prepareFormCoach()
    })

    $("#nav-update-player").click(() => {
        $("#page-content").load("view/component/updatePlayerView.php")
        prepareFormPlayer()
        prepareFormClub()
    })

    $("#nav-delete-player").click(() => {
        $("#page-content").load("view/component/deletePlayerView.php")
        prepareFormPlayer()
    })

    $("#nav-introduction").click(() => {
        window.open("introduction/index.html");
    })
})