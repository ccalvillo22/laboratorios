/* Funcion de Nombre */
function funcion_nombre (){
  var name = document.getElementById("nombre").value;
  var a = /^[a-zA-Z\s\'\-] {2,15}$/;

  if (a.test(name)){
    document.getElementById("nombrePrompt").style.color = "green";
    document.getElementById("nombrePrompt").InnerHTML = "Ok"
    return true;
  }
  else {
    document.getElementById("nombrePrompt").style.color = "red";
    document.getElementById("nombrePrompt").InnerHTML = "Ingresa los caracteres correctos"
    return false;
  }
}

/* Funcion de Direccion */
function funcion_dir (){
  var add = document.getElementById("direccion").value;
  var b = /^[a-zA-Z\s\'\-] {2,15}$/;

  if (b.test(add)){
    document.getElementById("direccionPrompt").style.color = "green";
    document.getElementById("direccionPrompt").InnerHTML = "Ok"
    return true;
  }
  else {
    document.getElementById("direccionPrompt").style.color = "red";
    document.getElementById("direccionPrompt").InnerHTML = "Ingresa los caracteres correctos"
    return false;
  }
}

/* Funcion de E-mail */
function funcion_email (){
  var eml = document.getElementById("email").value;
  var c = /^[a-zA-Z\s\'\-] {2,15}$/;

  if (c.test(eml)){
    document.getElementById("emailPrompt").style.color = "green";
    document.getElementById("emailPrompt").InnerHTML = "Ok"
    return true;
  }
  else {
    document.getElementById("emailPrompt").style.color = "red";
    document.getElementById("emailPrompt").InnerHTML = "Ingresa los caracteres correctos"
    return false;
  }
}

/* Funcion de Telefono */
function funcion_tel (){
  var tel = document.getElementById("telefono").value;
  var d = /^[a-zA-Z\s\'\-] {2,15}$/;

  if (d.test(tel)){
    document.getElementById("telefonoPrompt").style.color = "green";
    document.getElementById("telefonoPrompt").InnerHTML = "Ok"
    return true;
  }
  else {
    document.getElementById("telefonoPrompt").style.color = "red";
    document.getElementById("telefonoPrompt").InnerHTML = "Ingresa los caracteres correctos"
    return false;
  }
}

/* Funcion de Contraseña */
function funcion_cont (){
  var cont = document.getElementById("contrasena").value;
  var e = /^[a-zA-Z\s\'\-] {2,15}$/;

  if (e.test(cont)){
    document.getElementById("contrasenaPrompt").style.color = "green";
    document.getElementById("contrasenaPrompt").InnerHTML = "Ok"
    return true;
  }
  else {
    document.getElementById("contrasenaPrompt").style.color = "red";
    document.getElementById("nombrePrompt").InnerHTML = "Ingresa los caracteres correctos"
    return false;
  }
}