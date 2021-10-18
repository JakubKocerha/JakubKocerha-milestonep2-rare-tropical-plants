function sendMail(contactForm) {
    emailjs.send('gmail', 'plants', {
        'from_name': contactForm.name.value,
        'from_email': contactForm.email.value,
        'message': contactForm.message.value
    })
    .then(
        function(response) {
            console.log('SUCCESS!', response);
            window.location.reload();
        },
        function(error) {
            console.log('FAILED...', error);
        }
    ); 
    return false; 
}
