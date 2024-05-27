document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault();
    var inputField = document.querySelector('.input');
    var email = inputField.value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        document.querySelector('.icon').classList.remove('hidden');
        document.querySelector('.alert').classList.remove('hidden');
    } else {
        document.querySelector('.icon').classList.add('hidden');
        document.querySelector('.alert').classList.add('hidden');
       
    }
});
