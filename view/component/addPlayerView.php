<form id="form-add-player" method="post" onsubmit="return false;">
    <label for="form-player-full-name">Full Name</label>
    <input id="form-player-full-name" name="fullName" type="text" placeholder="Full name" required>

    <label for="form-player-club">Club</label>
    <select id="form-player-club" required></select>

    <label for="form-player-dob">Date of birth</label>
    <input id="form-player-dob" name="dob" type="date" required>

    <label for="form-player-position">Position</label>
    <select id="form-player-position" required>
        <option value='MF'>MF</option>
        <option value='FW'>FW</option>
        <option value='GK'>GK</option>
        <option value='DF'>DF</option>
    </select>

    <label for="form-player-nationality">Nationality</label>
    <input id="form-player-nationality" name="nationality" type="text" placeholder="Nationality" required>

    <label for="form-player-number">Number</label>
    <input id="form-player-number" name="number" type="number" placeholder="Number" min="0" required>

    <button id="btn-add-player" type="submit" onclick="onSubmitAddPlayer()">Add player</button>
</form>