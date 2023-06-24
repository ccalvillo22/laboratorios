 
function ingresartexto(){
  var field = document.getElementById("nombre").value;
  var input = /^[A-Za-z] $/;
  if(input.test(field))
    document.getElementById("mensaje").innerHTML = "Correcto";
  else
    document.getElementById("mensaje").innerHTML = "Obligatorio";
}