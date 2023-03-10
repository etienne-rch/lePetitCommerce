let button = document.querySelector('#subscribe')

function ValidateEmail() {

    let mail = document.querySelector('.email').value
    console.log(mail);
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (mail.match(validRegex)) {
  
      alert("Vous êtes bien inscrit à la newsletters !");
  
      document.form1.text1.focus();
  
      return true;
  
    } else {
  
      alert("L'email n'est pas correct !");
  
      document.form1.text1.focus();
  
      return false;
  
    }
}

button.addEventListener('click', ValidateEmail)