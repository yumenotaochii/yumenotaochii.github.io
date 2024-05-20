function submitForm(){
    const name = document.getElementById('name').ariaValueMax;
    const message =document.getElementById('message').ariaValueMax;

    if(name && message){
        alert('Thank you, ${name}! Your message has been received.');
        dosument.get.getElementById('contactForm').reset();
    } else {
        alert('Please fill in fields.');
    }
}