<form id="form-search-player" method="post" onsubmit="return false;">
    <label for="form-player-full-name">Full Name</label>
    <input id="form-player-full-name" name="fullName" type="text" placeholder="Full name">

    <label for="form-player-club">Club</label>
    <select id="form-player-club" name="club" type="checkbox"></select>

    <label for="form-player-dob">Date of birth</label>
    <input id="form-player-dob" name="dob" type="date">

    <label for="form-player-position">Position</label>
    <input id="form-player-position" name="position" type="text" placeholder="Position">

    <label for="form-player-nationality">Nationality</label>
    <input id="form-player-nationality" name="nationality" type="text" placeholder="Nationality">

    <label for="form-player-number">Number</label>
    <input id="form-player-number" name="number" type="number" placeholder="Number" min="0">

    <button id="btn-search-player" type="submit" onclick="onSubmitSearchPlayer()">Search player</button>
</form>
<div class="table">
    <table id="table-content">
        <thead>
            <tr>
                <th>Player ID</th>
                <th>Full Name</th>
                <th>Club ID</th>
                <th>Date of birth</th>
                <th>Position</th>
                <th>Nationality</th>
                <th>Number</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
</div>
<ul id="pagination"></ul>