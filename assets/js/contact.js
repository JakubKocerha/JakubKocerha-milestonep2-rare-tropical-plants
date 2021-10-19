// code partly from emailjs doc and CI tutorials
// function for emailjs api
function sendMail(contactForm) {
    emailjs.send('gmail', 'plants', {
        'from_name': contactForm.name.value,
        'from_email': contactForm.email.value,
        'message': contactForm.message.value
    })
    .then(
        function(response) {
            alert('Your email has been sent!');
            window.location.reload();
        },
        function(error) {
            alert('Sending of your email failed!');
        }
    ); 
    return false; 
}
