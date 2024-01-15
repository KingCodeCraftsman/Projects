

document.addEventListener('DOMContentLoaded', function () {
    var changeColorBtn = document.getElementById('changeColorBtn');
    var header = document.querySelector('header');

    // Define an array of colors
    var colors = ['#867070', '#D5B4B4', '#E4D0D0'];

    changeColorBtn.addEventListener('click', function () {
        // Get a random index to pick a color from the array
        var randomIndex = Math.floor(Math.random() * colors.length);
        header.style.backgroundColor = colors[randomIndex];
    });

    var contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        alert('Form submitted successfully!\n\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);

        //  AJAX code here to submit the form data to a server.
    });
});



