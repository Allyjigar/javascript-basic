
var num1;
var num2;
var operacion;

function init(){

    // variables
    var anterior = document.getElementById("anterior");
    var pantalla = document.getElementById("pantalla");
    var suma = document.getElementById("sumar");
    var resta = document.getElementById("restar");
    var multiplica = document.getElementById("multiplicar");
    var divide = document.getElementById("dividir");
    var igual = document.getElementById("igual");
    var borra = document.getElementById("borrar");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
    var punto = document.getElementById("punto");

    //eventos

    uno.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "1";
    }

    dos.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "2";
    }

    tres.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "3";
    }

    cuatro.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "4";
    }

    cinco.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "5";
    }

    seis.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "6";
    }

    siete.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "7";
    }

    ocho.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "8";
    }

    nueve.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "9";
    }

    cero.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "0";
    }

    punto.onclick = function(e){
        pantalla.textContent = pantalla.textContent + ".";
    }

    borra.onclick = function(e){
        borrar();
    }

    suma.onclick = function(e){
        num1 = pantalla.textContent;
        operacion = "suma";
        limpiar();
    }

    resta.onclick = function(e){
        num1 = pantalla.textContent;
        operacion = "resta";
        limpiar();
    }

    multiplica.onclick = function(e){
        num1 = pantalla.textContent;
        operacion = "producte";
        limpiar();
    }

    divide.onclick = function(e){
        num1 = pantalla.textContent;
        operacion = "divisio";
        limpiar();
    }

    igual.onclick = function(e){
        num2 = pantalla.textContent;
        calculadora();
    }


    function limpiar(){
        pantalla.textContent = " ";
    }

    function borrar(){
        pantalla.textContent = " ";
        anterior.textContent = " ";
        num1 = 0;
        num2 = 0;
        operacion = "";
    }

    function calculadora() {
        var resultado = 0;
        if(operacion === "suma"){
            resultado = parseFloat(num1) + parseFloat(num2);
        } else if (operacion === "resta"){
            resultado = parseFloat(num1) - parseFloat(num2);
        } else if(operacion === "producte"){
            resultado = parseFloat(num1) * parseFloat(num2);
        } else if(operacion === "divisio"){
            resultado = parseFloat(num1) / parseFloat(num2);
                if(num2 === 0){
                alert("Error, introduiu un numero més gran que 0.")
                } 
        }
   
        borrar();
        pantalla.textContent = resultado;
    }
}
   




        
            
    
        
    