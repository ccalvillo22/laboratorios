 
function GEEKFORGEEKS()                                    
{ 
    var name = document.forms["RegForm"]["Name"];               
    var email = document.forms["RegForm"]["EMail"];    
    var phone = document.forms["RegForm"]["Telephone"];  
    var what =  document.forms["RegForm"]["Subject"];  
    var password = document.forms["RegForm"]["Password"];  
    var address = document.forms["RegForm"]["Address"];  
   
    if (name.value == "")                                  
    { 
        window.alert("Por favor ingresa tu nombre."); 
        name.focus(); 
        return false; 
    } 
   
    if (address.value == "")                               
    { 
        window.alert("Por favor ingresa tu dirección."); 
        name.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        window.alert("Por favor ingresa tu e-mail."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Por favor ingresa correctamente tu e-mail."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Por favor ingresa correctamente tu e-mail."); 
        email.focus(); 
        return false; 
    } 
   
    if (phone.value == "")                           
    { 
        window.alert("Por favor ingresa tu numero telefonico"); 
        phone.focus(); 
        return false; 
    } 
   
    if (password.value == "")                        
    { 
        window.alert("Debes de ingresar un password"); 
        password.focus(); 
        return flase; 
    } 
   
    return true; 
}