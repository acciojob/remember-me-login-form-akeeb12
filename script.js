//your JS code here. If required.
document.getElementById('loginForm').addEventListener('submit', function (event) {
	event.preventDefault();

	var username = document.getElementById('usernamme');
	var password = document.getElementById('password').value;
	var rememberMe = document.getElementById('rememberMe').checked;

	if(rememberMe){
		localStorage.setItem('username', username);
		localStorage.setItem('password', password);
	}else{
		localStorage.removeItem(username);
		localStorage.removeItem(password);
	}

	alert('Logged in as', + username);
});

window.onload = function () {
	var savedUsername = localStorage.getItem('username');
	if(savedUsername){
		var btn = document.createElement('button');
		btn.id = 'existing';
		btn.textContent = 'Login as existing user';
		document.body.appendChild(btn);

		btn.addEventListener('click', function () {
			alert('Logged in as', + savedUsername);
		});
	}
};








