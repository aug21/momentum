const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const todoForm = document.querySelector("#todo-form");
const greeting = document.querySelector("#greeting");
const savedUsername = localStorage.getItem(USERNAME_KEY);


function onLoginSubmit(event) {
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	paintGreetings(username);
}
function paintGreetings(username) {
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
	todoForm.classList.remove(HIDDEN_CLASSNAME);
}

if(savedUsername === null) {
	// show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	// show the greetings
	paintGreetings(savedUsername);
}
