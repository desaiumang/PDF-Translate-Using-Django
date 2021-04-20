// modal opening elements - buttons of login and signup
const btnLogin = document.getElementById('btnLogin');
const btnSignup = document.getElementById('btnSignup');

// modal containers - divs of login and signup
const modalLogin = document.getElementById('login-container');
const modalSignup = document.getElementById('signup-container');

// closing modals or containers
const closeLogin = document.getElementById('closeLogin');
const closeSignup = document.getElementById('closeSignup');

// open modal on click event
btnLogin.onclick = function() {
    modalLogin.style.display = "block";
}
btnSignup.onclick = function() {
    modalSignup.style.display = "block";
}

// close on clicking outside
window.onclick = function(event) {
    if (event.target == modalLogin) {
        modalLogin.style.display = "none";
      }
}
window.onclick = function(event) {
    if (event.target == modalSignup) {
      modalSignup.style.display = "none";
    }
}

// when click on close button
closeLogin.onclick = function() {
    modalLogin.style.display = "none";
}

closeSignup.onclick = function() {
    modalSignup.style.display = "none";
}

btntranslate.onclick = function(){
  alert("hello world")
}
    
    // const sEmail = document.getElementById('semail');
    // const sPassword = document.getElementById('spassword');
    
    // const Signup = document.getElementById('signup');

/*function login(){
    var useremail = document.getElementById('lemail').value;
    var userpassword = document.getElementById('lpassword').value;
    const promise = firebase.auth().signInWithEmailAndPassword(useremail, userpassword);
    promise.catch(e => alert(e.message));
    alert("Logged in");
};*/

/*function signup(){
    var email = document.getElementById('semail').value;
    var password = document.getElementById('spassword').value;
    // const promise = firebase.auth().createUserWithEmailAndPassword(useremail, userpassword);
    // promise.catch(e => alert(e.message));
    // alert("Signed up");
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    alert(errorMessage);
  });

}*/