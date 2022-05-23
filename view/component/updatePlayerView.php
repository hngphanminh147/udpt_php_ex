<form id="form-update-player" method="post" onsubmit="return false;">
    <label for="form-player-id">Select Player</label>
    <select id="form-player-id" onchange="setFormPlayerData()"></select>

    <label for="form-player-full-name">Full Name</label>
    <input id="form-player-full-name" name="fullName" type="text" placeholder="Full name" >

    <label for="form-player-club">Club</label>
    <select id="form-player-club" name="club" type="checkbox" ></select>

    <label for="form-player-dob">Date of birth</label>
    <input id="form-player-dob" name="dob" type="date" >

    <label for="form-player-position">Position</label>
    <select id="form-player-position" >
        <option value='MF'>MF</option>
        <option value='FW'>FW</option>
        <option value='GK'>GK</option>
        <option value='DF'>DF</option>
    </select>

    <label for="form-player-nationality">Nationality</label>
    <input id="form-player-nationality" name="nationality" type="text" placeholder="Nationality" >

    <label for="form-player-number">Number</label>
    <input id="form-player-number" name="number" type="number" placeholder="Number" min="0" >

    <button id="btn-update-player" type="submit" onclick="onSubmitUpdatePlayer()">Update player</button>
</form>