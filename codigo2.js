window.onload = function() { //tras cargar la página ...
    let visor1=document.getElementById("visor"); //referencia al visor
    let mititulo=document.getElementById("titulo"); //referencia al pie de foto
    }
    function mifoto(num) { //cambiar la imagen
             f="./img/cantante"+num+".jpg"; //ruta de la nueva imagen
             document.images["fotoVisor"].src=f; //cambiar imagen
             t=document.images["titulo"+num].alt; //texto de pie de foto
             mititulo.innerHTML=t; //cambiar pie de foto
    }
