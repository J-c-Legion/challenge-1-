//crear variables para buscar los elementos por el "id"
var textin = document.getElementById("textoingresado");
var textout = document.getElementById("textoegresado");
var bcopia = document.getElementById("copiartexto");
//crear validacion del texto 
/*
function validar()
{
    var textin = document.getElementById("textoingresado").value.toLowerCase();
    var dato=false;
    let texto=textin.value;
    if((/[A-Z]/.test(texto))||(/[á-ú]/.test(texto)))
    {
        alert("Solo");
    }
    else
    {
        dato=true;
        return dato;
    }
}*/

//crear funciones 
function encriptar()
{
        textoegresado.style.display="block";
        copiartexto.style.display="block";
        var textin = document.getElementById("textoingresado").value.toLowerCase();
        var textos = document.getElementById("textos")

        var mensaje=textin.replace(/e/img,"enter").replace(/i/img,"imes").replace(/a/img,"ai").replace(/o/img,"ober").replace(/u/img,"ufat");   //modificar el texto
        textin.value=mensaje;
        textoegresado.value=mensaje;
        //console.log(mensaje);
        textos.style.display="none";

}

function desencriptar()
{
    textoegresado.style.display="block";    //mostrar cuadro de texto de salida 
    var textin = document.getElementById("textoingresado").value.toLowerCase(); //leer texto ingresado
    var textos = document.getElementById("textos")      
    var mensaje=textin.replace(/enter/img,"e").replace(/imes/img,"i").replace(/ai/img,"a").replace(/ober/img,"o").replace(/ufat/img,"u");   //modificar el texto
    textin.value=mensaje;   //guardar texto modificado
    textoegresado.value=mensaje;    //mostrar texto modificado 
    //console.log(mensaje);
    textos.style.display="none";    //ocultar letrar 
}

function copiar()
{
    var textin = textoegresado.value;       //coger texto
        navigator.clipboard.writeText(textin);      //copiar texto 
}