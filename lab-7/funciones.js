/* Funcion de Nombre */
function funcion_nombre (){
  var name = document.getElementById("nombre").value;
  var a = /^[a-zA-Z\s\'\-] {2,15}$/;

  if (a.test(name)){
    document.getElementById("nombrePrompt").style.color = "Green";
    document.getElementById("nombrePrompt").InnerHTML = "<strong>Ok</strong>";
    return true;
  }
  else {
    document.getElementById("nombrePrompt").style.color = "Red";
    document.getElementById("nombrePrompt").InnerHTML = "<strong>Ingresa los caracteres correctos</strong>";
    return false;
  }
}

/* Funcion de Direccion */
function funcion_dir (){
  var add = document.getElementById("direccion").value;
  var b = /^[A-zA-z\s\'\-] {3}$/;

  if (b.test(add)){
    document.getElementById("direccionPrompt").style.color = "Green";
    document.getElementById("direccionPrompt").InnerHTML = "<strong>Ok</strong>";
    return true;
  }
  else {
    document.getElementById("direccionPrompt").style.color = "Red";
    document.getElementById("direccionPrompt").InnerHTML = "<strong>Ingresa los caracteres correctos</strong>";
    return false;
  }
}

/* Funcion de E-mail */
function funcion_email (){
  var eml = document.getElementById("email").value;
  var c = /^[a-zA-Z\s\'\-] {2,15}$/;

  if (c.test(eml)){
    document.getElementById("emailPrompt").style.color = "Green";
    document.getElementById("emailPrompt").InnerHTML = "<strong>Ok</strong>";
    return true;
  }
  else {
    document.getElementById("emailPrompt").style.color = "Red";
    document.getElementById("emailPrompt").InnerHTML = "<strong>Ingresa los caracteres correctos</strong>";
    return false;
  }
}

/* Funcion de Telefono */
function funcion_tel (){
  var tel = document.getElementById("telefono").value;
  var d = /^\d{3}-\d{3}-\d{4}$/;

  if (d.test(tel)){
    document.getElementById("telefonoPrompt").style.color = "Green";
    document.getElementById("telefonoPrompt").InnerHTML = "<strong>Ok</strong>";
    return true;
  }
  else {
    document.getElementById("telefonoPrompt").style.color = "Red";
    document.getElementById("telefonoPrompt").InnerHTML = "<strong>Ingresa los caracteres correctos</strong>";
    return false;
  }
}

/* Funcion de Contraseña */
function funcion_cont (){
  var cont = document.getElementById("contrasena").value;
  var e = /^[a-zA-Z\s\'\-] {2,15}$/;

  if (e.test(cont)){
    document.getElementById("contrasenaPrompt").style.color = "Green";
    document.getElementById("contrasenaPrompt").InnerHTML = "<strong>Ingresa los caracteres correctos</strong>";
    return true;
  }
  else {
    document.getElementById("contrasenaPrompt").style.color = "Red";
    document.getElementById("nombrePrompt").InnerHTML = "<strong>Ingresa los caracteres correctos</strong>";
    return false;
  }
}