function handleSignUp() {
	var email = document.getElementById('form-email').value;
	var password = document.getElementById('form-password').value;

	if (email.length < 4){
		alert("please enter a valid email");
		return;

	}

	if (password.length < 4) {
		alert("please enter a stronger password");
		return;


	}
	firebase.auth().createUserWithEmailAndPassword(email, password)
	.then(function(){

		//success
		alert("User created")
	})

	.catch(function(error){
		//something went wrong
		alert(error.message)
	});


}

function handleSignIn(){
	var email = document.getElementById('form-email').value;
	var password = document.getElementById('form-password').value;

	firebase.auth().signInWithEmailAndPassword(email,password)
	.then(
		function(){
		window.location.href="https://goolge.com";
	})
	.catch(
		function(error){
			alert(error.message);
	}
	);
}




function handleSignOut(){
	firebase.auth().signOut()
	.then(
		function(){
			alert("signed Out");
		})
	.catch(
		function(){
			alert("signed Out");
		}
		);
}





function handleFBLogin(){
	if(!firebase.auth().currentUser){
			//allow FB login
		var provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithPopup(provider)
		.then(function(result){
			var token = result.credential.accessToken;
			var user = result.user;
			alert(user.email);
			window.location.href="https://google.com";

		})
		.catch(function(error){
			alert(error.message);
		});
	}

	
	else{
			//already signed in
		handleSignOut();
	}
}