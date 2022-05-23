<form id="form-update-club" method="post" onsubmit="return false;" >
    <label for="form-club-id">Select Club</label>
    <select id="form-club-id" onchange="setFormClubData()"></select>

    <label for="form-club-name">Club Name</label>
    <input id="form-club-name" type="text" placeholder="Club Name" >

    <label for="form-club-short-name">Short Name</label>
    <input id="form-club-short-name" type="text" placeholder="Short Name" >

    <label for="form-club-stadium">Stadium</label>
    <select id="form-club-stadium" ></select>

    <label for="form-club-coach">Coach</label>
    <select id="form-club-coach" ></select>

    <button id="btn-update-club" type="submit" onclick="onSubmitUpdateClub()">Update club</button>
</form>