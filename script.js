//your JS code here. If required.
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('checkbox').checked;

    if (rememberMe) {
   
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
   
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}`);
    checkExistingUser();
});

function checkExistingUser() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
     
        document.getElementById('existing').style.display = 'block';
    } else {
     
        document.getElementById('existing').style.display = 'none';
    }
}

document.getElementById('existing').addEventListener('click', function () {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        alert(`Logged in as ${storedUsername}`);
    }
});

checkExistingUser();