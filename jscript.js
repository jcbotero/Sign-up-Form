
field = document.getElementById("name");
last = document.getElementById("last"); // mira si puedo correr este code con un foreach mejor 
mail = document.getElementById("mail");
paswor = document.getElementById("Pasword");

function mi() {
    if ( field == true) {
       document.getElementById("er1").style.display = "none";
    } else {
        document.getElementById("er1").style.display = "";
        document.getElementById("name").style.borderColor = "hsl(0, 100%, 74%)"
        }
  }  // esta funcion me despliega en otro div el mensaje de error si la forma se llena mal //

  function mis() {
    if ( last == true) {
       document.getElementById("er2").style.display = "none";
    } else {
        document.getElementById("er2").style.display = "";
        document.getElementById("last").style.borderColor = "hsl(0, 100%, 74%)"
        }
  }  // esta funcion me despliega en otro div el mensaje de error si la forma se llena mal //
  
  function mista() {
    if ( last == true) {
       document.getElementById("er3").style.display = "none";
    } else {
        document.getElementById("er3").style.display = "";
        document.getElementById("mail").style.borderColor = "hsl(0, 100%, 74%)"
        }
  }  // esta funcion me despliega en otro div el mensaje de error si la forma se llena mal //
  
  function mistake() {
    if ( paswor == true) {
       document.getElementById("er4").style.display = "none";
    } else {
        document.getElementById("er4").style.display = "";
        document.getElementById("paswor").style.borderColor = "hsl(0, 100%, 74%)"
        }
  }  // esta funcion me despliega en otro div el mensaje de error si la forma se llena mal //




   function valida() {
    document.getElementById("er1").style.display = "none";
    document.getElementById("name").style.borderColor = "rgb(223, 221, 221)"
   } /* con onchange en html y esta function.. una vez el input es bien llenado...se borra el mensaje de error*/
 

   function valid() {
    document.getElementById("er2").style.display = "none";
    document.getElementById("last").style.borderColor = "rgb(223, 221, 221)"
   } /* con onchange en html y esta function.. una vez el input es bien llenado...se borra el mensaje de error*/

   function vali() {
    document.getElementById("er3").style.display = "none";
    document.getElementById("mail").style.borderColor = "rgb(223, 221, 221)"
   } /* con onchange en html y esta function.. una vez el input es bien llenado...se borra el mensaje de error*/
   
   function val() {
    document.getElementById("er4").style.display = "none";
    document.getElementById("paswor").style.borderColor = "rgb(223, 221, 221)"
   } /* con onchange en html y esta function.. una vez el input es bien llenado...se borra el mensaje de error*/
 

 
  


  