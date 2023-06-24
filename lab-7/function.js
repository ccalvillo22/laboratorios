 
function ingresartexto(){
  var field = document.getElementById("e-mail").value;
  var email = /^[A-Za-z]$/;
  if(email.test(field))
    document.getElementById("mensaje").innerHTML = "Entrada validada";
  else
    document.getElementById("mensaje").innerHTML = "Obligatorio";
}

function formulario()                                    
{      
    var what =  document.forms["RegForm"]["Subject"];  
    return true; 
}