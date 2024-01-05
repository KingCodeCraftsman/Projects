
document.addEventListener('DOMContentLoaded', function () {
    var changeColorBtn = document.getElementById('changeColorBtn');
    var header = document.querySelector('header');

    changeColorBtn.addEventListener('click', function () {
        header.style.backgroundColor = getRandomColor();
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

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

});




