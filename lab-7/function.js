 
function ingresartexto(){
  var fname = document.getElementById("nombre").value;
  var re1 = /^[a-zA-Z\'\-] $/;
  if(re1.test(fname)){
    document.getElementById("mensaje").style.color = "Green";
    document.getElementById("mensaje").innerHTML = "<strong>Correcto</strong>";
     return true;
  }
 
  else{
    document.getElementById("mensaje").style.color = "Red";
    document.getElementById("mensaje").innerHTML = "<strong>Obligatorio</strong>";
    return false;
}
}

function formulario()                                    
{ 
    var address = document.forms["RegForm"]["Address"]; 
    var password = document.forms["RegForm"]["Password"];  
    var what =  document.forms["RegForm"]["Subject"];  
    /var email = document.forms["RegForm"]["EMail"];/    
    var name = document.forms["RegForm"]["Name"];               
    var what =  document.forms["RegForm"]["Subject"];  
    var phone = document.forms["RegForm"]["Telephone"];  
 
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
    if (address.value == "")                               
    { 
        window.alert("Please enter your address."); 
        name.focus(); 
        return false; 
    } 
    if (email.value == "") 

    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    
    if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
    return true; 
}

