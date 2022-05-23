<form id="form-add-club" method="post" onsubmit="return false;">
    <label for="form-club-name">Club Name</label>
    <input id="form-club-name" type="text" placeholder="Club Name" required>

    <label for="form-club-short-name">Short Name</label>
    <input id="form-club-short-name" type="text" placeholder="Short Name" required>

    <label for="form-club-stadium">Stadium</label>
    <select id="form-club-stadium" required></select>

    <label for="form-club-coach">Coach</label>
    <select id="form-club-coach" required></select>

    <button id="btn-add-club" type="submit" onclick="onSubmitAddClub()">Add club</button>
</form>