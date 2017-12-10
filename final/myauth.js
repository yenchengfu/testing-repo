// Sign up
function handleSignUp() {
	// give it to valuable email & password
	var email = document.getElementById('form-email').value;
	var password = document.getElementById('form-password').value;


	// length of email and password
	if(email.length < 4) {
		alert("Please enter a valid email");
		return;
	}
	if(password.length < 4) {
		alert("Please enter a stronger password");
		return;
	}

	// making new information
	firebase.auth()
	.createUserWithEmailAndPassword(email, password)
	// then = if it's success
	.then(function(){
		alert("User created");
	})
	// catch = if there is something wrong/
	.catch(function(error){
		alert(error.message);
	})
}


// Sign in
function handleSignIn() {
	// give it to valuable email & password
	var email = document.getElementById('form-email').value;
	var password = document.getElementById('form-password').value;

	// making new information
	firebase.auth()
	.signInWithEmailAndPassword(email, password)

	// then = if it's success
	.then(function(){
		window.location.href="http://www.shanewei.com/12_8/index4.html"
	})

	// catch = if there is something wrong/
	.catch(function(error){
		alert(error.message);
	})
}

// Sign out / refe : https://firebase.google.com/docs/reference/js/firebase.auth.Auth / search sign out
function handleSignOut() {
	firebase.auth().signOut()
	.then(function(){
		alert("Signed Out");
		window.location.href="http://www.shanewei.com/12_8/index2.html";
	})
	.catch(function(error){
		alert(error.message);
	})
}


// Facebook login
function handleFBLogin() {
	// allow FB login
	if(!firebase.auth().currentUser) {
		var provider = new firebase.auth.FacebookAuthProvider();
		// popup
		firebase.auth().signInWithPopup(provider)
		// if it success
		.then(function(result){
			var token = result.credential.accessToken;
			var user = result.user;
			alert(user.email);
			window.location.href="http://www.shanewei.com/12_8/index4.html";
		})
		// if there is something wrong
		.catch(function(error){
			alert(error.message);
		});
	}
	// already signed in. so makes them sign out
	else {
		handleSignOut();
	}
}






























