function validateAddPlayerData(fullName, clubId, dob, position, nationality, number) {
    if (fullName == "") {
        return false
    }
    if (clubId == "Choose one") {
        return false
    }
    if (dob == "") {
        return false
    }
    if (position == "" || !POSITION.includes(position)) {
        return false
    }
    if (nationality == "") {
        return false
    }
    if (number == "") {
        return false
    }
    return true
}

function clearPlayerFormData() {
    $("#form-player-full-name").val("")
    $("#form-player-club").val("")
    $("#form-player-dob").val("")
    $("#form-player-position").val("")
    $("#form-player-nationality").val("")
    $("#form-player-number").val("")
}

function onSubmitAddPlayer() {
    let fullName = $("#form-player-full-name").val().trim()
    let clubId = $("#form-player-club").val().trim()
    let dob = $("#form-player-dob").val().trim()
    let position = $("#form-player-position").val().trim()
    let nationality = $("#form-player-nationality").val().trim()
    let number = $("#form-player-number").val().trim()

    if (validateAddPlayerData(fullName, clubId, dob, position, nationality, number)) {
        $.ajax({
            dataType: "json",
            type: "POST",
            url: "controller/playerController/addPlayer.php",
            data: {
                fullName: fullName,
                clubId: clubId,
                dob: dob,
                position: position,
                nationality: nationality,
                number: number
            },
            success: (response) => {
                alert("Add player successfully")

                console.log(response)

                clearPlayerFormData()

            },
            error: (jqXHR, textStatus, errorThrown) => {
                console.log(jqXHR.responseText)
                console.log(textStatus);
                console.log(errorThrown);
            }
        })
    } else {
        alert("Required data is missed or incorrect. Please check again")
    }
}

function validateAddClubData(clubName, shortName, stadiumID, coachID) {
    if (clubName == "") {
        return false
    }
    if (stadiumID == "Choose one") {
        return false
    }
    if (coachID == "Choose one") {
        return false
    }
    if (shortName == "") {
        return false
    }
    return true
}

function clearClubFormData() {
    $("#form-club-name").val("")
    $("#form-club-short-name").val("")
    $("#form-club-stadium").val("")
    $("#form-club-coach").val("")
}

function onSubmitAddClub() {
    let clubName = $("#form-club-name").val().trim()
    let shortName = $("#form-club-short-name").val().trim()
    let stadiumID = $("#form-club-stadium").val().trim()
    let coachID = $("#form-club-coach").val().trim()

    if (validateAddClubData(clubName, shortName, stadiumID, coachID)) {
        $.ajax({
            dataType: "json",
            type: "POST",
            url: "controller/clubController/addClub.php",
            data: {
                clubName: clubName,
                shortName: shortName,
                stadiumID: stadiumID,
                coachID: coachID
            },
            success: (response) => {
                alert("Add club successfully")

                console.log(response)

                clearClubFormData()
            },
            error: (jqXHR, textStatus, errorThrown) => {
                console.log(jqXHR.responseText)
                console.log(textStatus);
                console.log(errorThrown);
            }
        })
    } else {
        alert("Required data is missed or incorrect. Please check again")
    }
}

function setFormSelectorOptions(selector, data) {
    let rows = "<option>Choose one</option>";
    $.each(data, (index) => {
        rows = rows + "<option value='" + data[index].id + "'>" + data[index].name + "</option>";
    })
    $(selector).html(rows);
}

function prepareFormClub() {
    $.ajax({
        dataType: "json",
        type: "GET",
        url: "controller/clubController/getClubs.php"
    }).done((data) => {
        if ("#form-player-club".length > 0) {
            setFormSelectorOptions(
                "#form-player-club",
                data.data.map((d) => new Object({id: d.ClubID, name: d.ClubName})));
        }
        if ("#form-club-id".length > 0) {
            setFormSelectorOptions(
                "#form-club-id",
                data.data.map((d) => new Object({id: d.ClubID, name: d.ClubName})));
        }
    })
}

function prepareFormStadium() {
    $.ajax({
        dataType: "json",
        type: "GET",
        url: "controller/stadiumController/getStadiums.php"
    }).done((data) => {
        setFormSelectorOptions(
            "#form-club-stadium",
            data.data.map((d) => new Object({id: d.StadiumID, name: d.SName})));
    })
}

function prepareFormCoach() {
    $.ajax({
        dataType: "json",
        type: "GET",
        url: "controller/coachController/getCoaches.php"
    }).done((data) => {
        setFormSelectorOptions(
            "#form-club-coach",
            data.data.map((d) => new Object({id: d.CoachID, name: d.CFullName})));
    })
}

function prepareFormPlayer() {
    $.ajax({
        dataType: "json",
        type: "GET",
        url: "controller/playerController/getPlayers.php"
    }).done((data) => {
        if ($("#form-player-full-name").length > 0) {
            setFormSelectorOptions(
                "#form-player-full-name",
                data.data.map((d) => new Object({id: d.PlayerID, name: d.FullName})));
        }
        if ($("#form-player-id").length > 0) {
            setFormSelectorOptions(
                "#form-player-id",
                data.data.map((d) => new Object({id: d.PlayerID, name: d.FullName})));
        }
    })
}

function onSubmitDeletePlayer() {
    console.log("delete")
    let PlayerID = $("#form-player-full-name").val()

    $.ajax({
        dataType: "json",
        type: "POST",
        url: "controller/playerController/deletePlayer.php",
        data: {
            PlayerID: PlayerID
        },
        success: (response) => {
            alert("Delete player successfully")

            console.log(response)

            prepareFormPlayer()
        },
        error: (jqXHR, textStatus, errorThrown) => {
            console.log(jqXHR.responseText)
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}

// ADVANCED PLAYER SEARCH
function onSubmitSearchPlayer() {
    let fullName = $("#form-player-full-name").val().trim() === "" ? "" : $("#form-player-full-name").val().trim()
    let clubId = $("#form-player-club").val().trim() === "Choose one" ? "" : $("#form-player-club").val().trim()
    let dob = $("#form-player-dob").val().trim() === "" ? null : $("#form-player-dob").val().trim()
    let position = $("#form-player-position").val().trim() === "" ? "" : $("#form-player-position").val().trim()
    let nationality = $("#form-player-nationality").val().trim() === "" ? "" : $("#form-player-nationality").val().trim()
    let number = $("#form-player-number").val().trim() === "" ? "" : $("#form-player-number").val().trim()

    $.ajax({
        dataType: "json",
        type: "GET",
        url: "controller/playerController/getPlayers.php",
        data: {
            page: 1,
            pageSize: PAGE_LENGTH,
            fullName: fullName,
            clubId: clubId,
            dob: dob,
            position: position,
            nationality: nationality,
            number: number
        },
        success: (response) => {

            // console.log(response)
            // return

            let totalPage = Math.ceil(response.total / PAGE_LENGTH);
            let currentPage = 1

            $("#pagination").twbsPagination({
                totalPages: totalPage,
                visiblePages: currentPage,
                onPageClick: (event, pageL) => {
                    let page = pageL
                    getPlayerPageData(page, PAGE_LENGTH);
                }
            })
            setPlayerTableHeader("table-content thead")
            managePlayerRow("table-content tbody", response.data);
        },
        error: (jqXHR, textStatus, errorThrown) => {
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}

//UPDATE CLUB
function onSubmitUpdateClub() {
    let clubId = $("#form-club-id").val()
    let clubName = $("#form-club-name").val()
    let shortName = $("#form-club-short-name").val()
    let stadiumID = $("#form-club-stadium").val()
    let coachID = $("#form-club-coach").val()

    if (validateAddClubData(clubName, shortName, stadiumID, coachID)) {
        $.ajax({
            dataType: "json",
            type: "POST",
            url: "controller/clubController/updateClub.php",
            data: {
                clubId: clubId,
                clubName: clubName,
                shortName: shortName,
                stadiumID: stadiumID,
                coachID: coachID,
            },
            success: (updated) => {
                if (updated) {
                    alert("Update club successfully")
                }
            },
            error: (jqXHR, textStatus, errorThrown) => {
                console.log(jqXHR.responseText)
                console.log(textStatus);
                console.log(errorThrown);
            }
        })
    } else {
        alert("Required data is missed or incorrect. Please check again")
    }
}

function setFormClubData() {
    let clubId = $("#form-club-id").val().trim()

    if (clubId == "Choose one") {
        $("#form-club-name").val("")
        $("#form-club-short-name").val("")
        $("#form-club-stadium").val("")
        $("#form-club-coach").val("")
        return
    }
    $.ajax({
        dataType: "json",
        type: "GET",
        url: "controller/clubController/getClubs.php",
        data: {
            page: 1,
            pageSize: 1,
            clubId: clubId,
        }
    }).done((data) => {
        $("#form-club-name").val(data.data[0].ClubName)
        $("#form-club-short-name").val(data.data[0].Shortname)
        $("#form-club-stadium").val(data.data[0].StadiumID)
        $("#form-club-coach").val(data.data[0].CoachID)
    })
}

function setFormPlayerData() {
    let playerId = $("#form-player-id").val().trim()

    if (playerId == "Choose one") {
        clearPlayerFormData()
        return
    }

    $.ajax({
        dataType: "json",
        type: "GET",
        url: "controller/playerController/getPlayers.php",
        data: {
            page: 1,
            pageSize: 1,
            playerId: playerId,
        }
    }).done((data) => {
        $("#form-player-full-name").val(data.data[0].FullName)
        $("#form-player-club").val(data.data[0].ClubID)
        $("#form-player-dob").val(data.data[0].DOB.substr(0, 10))
        $("#form-player-position").val(data.data[0].Position)
        $("#form-player-nationality").val(data.data[0].Nationality)
        $("#form-player-number").val(data.data[0].Number)
    })
}

//UPDATE PLAYER
function onSubmitUpdatePlayer() {
    let playerId = $("#form-player-id").val().trim()
    let fullName = $("#form-player-full-name").val().trim()
    let clubId = $("#form-player-club").val().trim()
    let dob = $("#form-player-dob").val().trim()
    let position = $("#form-player-position").val().trim()
    let nationality = $("#form-player-nationality").val().trim()
    let number = $("#form-player-number").val().trim()

    if (validateAddPlayerData(fullName, clubId, dob, position, nationality, number)) {
        $.ajax({
            dataType: "json",
            type: "POST",
            url: "controller/playerController/updatePlayer.php",
            data: {
                playerId: playerId,
                fullName: fullName,
                clubId: clubId,
                dob: dob,
                position: position,
                nationality: nationality,
                number: number
            },
            success: (updated) => {
                if (updated) {
                    alert("Update club successfully")
                }
                clearPlayerFormData()

            },
            error: (jqXHR, textStatus, errorThrown) => {
                console.log(jqXHR.responseText)
                console.log(textStatus);
                console.log(errorThrown);
            }
        })
    } else {
        alert("Required data is missed or incorrect. Please check again")
    }
}

//LOAD CLUB LIST
function manageClubData(page, pageSize) {
    $.ajax({
        dataType: "json",
        url: "controller/clubController/getClubs.php",
        data: {
            page: page,
            pageSize: pageSize
        },
        success: (response) => {
            let totalPage = Math.ceil(response.total / pageSize);
            let currentPage = page

            $("#pagination").twbsPagination({
                totalPages: totalPage,
                visiblePages: currentPage,
                onPageClick: (event, pageL) => {
                    page = pageL
                    getClubPageData(page, pageSize);
                }
            })
            setClubRow(response.data);
        },
        error: (jqXHR, textStatus, errorThrown) => {
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}

function getClubPageData(page, pageSize) {
    $.ajax({
        dataType: "json",
        url: "controller/clubController/getClubs.php",
        data: {
            page: page,
            pageSize: pageSize
        }
    }).done((data) => {
        setClubRow(data.data);
    })
}

function setClubTableHeader() {
    let header = "<tr><th>Club ID</th><th>Club Name</th><th>Short name</th><th>Stadium ID</th><th>Coach ID</th></tr>";
    $("#table-content thead").html(header);
}

function setClubRow(data) {
    setClubTableHeader();

    let rows = "";
    $.each(data, (index) => {
        rows = rows + "<tr>";
        rows = rows + "<td>" + data[index].ClubID + "</td>";
        rows = rows + "<td>" + data[index].ClubName + "</td>";
        rows = rows + "<td>" + data[index].Shortname + "</td>";
        rows = rows + "<td>" + data[index].StadiumID + "</td>";
        rows = rows + "<td>" + data[index].CoachID + "</td>";
        rows = rows + "</tr>";
    })
    $("#table-content tbody").html(rows);
}

//LOAD PLAYER LIST
function managePlayerData(page, pageSize) {
    $.ajax({
        dataType: "json",
        url: "controller/playerController/getPlayers.php",
        data: {
            page: page,
            pageSize: pageSize
        },
        success: (response) => {
            let totalPage = Math.ceil(response.total / PAGE_LENGTH);
            let currentPage = page

            $("#pagination").twbsPagination({
                totalPages: totalPage,
                visiblePages: currentPage,
                onPageClick: (event, pageL) => {
                    page = pageL
                    getPlayerPageData(page, pageSize);
                }
            })
            managePlayerRow("#table-content tbody", response.data);
        },
        error: (jqXHR, textStatus, errorThrown) => {
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}

function getPlayerPageData(page, pageSize) {
    $.ajax({
        dataType: "json",
        url: "controller/playerController/getPlayers.php",
        data: {
            page: page,
            pageSize: pageSize
        }
    }).done((data) => {
        setPlayerTableHeader("#table-content thead")
        managePlayerRow("#table-content tbody", data.data);
    })
}

function setPlayerTableHeader(selector) {
    let header = "<tr><th>Player ID</th><th>Full Name</th><th>Club ID</th><th>Date of birth</th><th>Position</th><th>Nationality</th><th>Number</th></tr>";
    $(selector).html(header);
}

function managePlayerRow(selector, data) {
    let rows = ""
    $.each(data, (index) => {
        rows = rows + "<tr>";
        rows = rows + "<td>" + data[index].PlayerID + "</td>";
        rows = rows + "<td>" + data[index].FullName + "</td>";
        rows = rows + "<td>" + data[index].ClubID + "</td>";
        rows = rows + "<td>" + data[index].DOB + "</td>";
        rows = rows + "<td>" + data[index].Position + "</td>";
        rows = rows + "<td>" + data[index].Nationality + "</td>";
        rows = rows + "<td>" + data[index].Number + "</td>";
        rows = rows + "</tr>";
    })
    $(selector).html(rows);
}
