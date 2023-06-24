 
function ingresartexto(){
  var fname = document.getElementById("nombre").value;
  var re1 = /^[a-zA-Z\s\'\-]{2,15}$/;
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


