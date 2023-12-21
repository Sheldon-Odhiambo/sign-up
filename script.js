function register() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var terms = document.getElementById('terms').checked;

    // Add your registration logic here
    // For simplicity, let's just log the input for now
    console.log('Email: ' + email);
    console.log('Password: ' + password);
    console.log('Terms Accepted: ' + terms);
}

function signInWithGoogle() {
    // Add your Google Sign-In logic here
    console.log('Signing up with Google...');
}
