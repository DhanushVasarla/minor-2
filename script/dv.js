document.getElementById('loginButton').addEventListener('click', function() {
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    if (email === '') {
        alert('Please enter your email');
        return;
    }
    if (password === '') {
        alert('Please enter your password');
        return;
    }

    // If validation passes, submit the form
    document.getElementById('loginForm').submit();
    window.location.href = 'main.html';
});