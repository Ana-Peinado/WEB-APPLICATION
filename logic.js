
function validate(password, repeatPassword, email, telephone) {
 
    var name = document.getElementById("name").value;
    if (name == "") {
        alert("Por favor, ingrese su nombre");
        return false;
    }
    
    var username = document.getElementById("username").value;
    if (username == "") {
        alert("Por favor, ingrese un nombre de usuario");
        return false;
    }
  
    if (password == "") {
        alert("Por favor, ingrese una contraseña");
        return false;
    }
    
    if (password != repeatPassword) {
        alert("Las contraseñas no coinciden");
        return false;
    }
    
    if (email == "" || email.indexOf("@") == -1) {
        alert("Por favor, ingrese un correo electrónico válido");
        return false;
    }
    
    if (isNaN(telephone)) {
        alert("Por favor, ingrese un número de teléfono válido");
        return false;
    }
    
    alert("Formulario enviado exitosamente");
    return true;
}

// Asignar la función de validación al evento de envío del formulario
document.forms["form1"].addEventListener("submit", function(e) {
    e.preventDefault();
    validate(
        document.getElementById('password').value,
        document.getElementById('repeatpassword').value,
        document.getElementById('email').value,
        document.getElementById('telephone').value
    );
});
