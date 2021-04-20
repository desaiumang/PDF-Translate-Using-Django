 // get elements
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// get modal element
const modal = document.getElementById('modal');

// get sign in button as modal btn
const modalBtn = document.getElementById('modal-btn')

// Events
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
modalBtn.addEventListener('click', openModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
	modal.style.display = 'flex';
}

// Close If Outside Click
function outsideClick(e) {
	if (e.target == modal) {
	  modal.style.display = 'none';
	}
}

