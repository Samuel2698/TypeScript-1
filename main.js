var mi_variable = "Una variable";
// FALSO
// mi_variable=12
// VERDADERO
mi_variable = "12";
var numero = 26;
var verdadero = true;
var cualquiera = "puedo meter lo que sea";
// CORRECTO
verdadero = false;
// Constantes
var nombre = "Samuel Velasco";
//FALSO
// nombre="Pepe"
var texto = "velascodev.fr";
console.log(texto, numero, verdadero);
var personas = ["Samuel", "Romane", "Luis"];
var div_personas = document.querySelector("#personas");
div_personas.innerHTML = "<ul>";
personas.map(function (persona) {
    div_personas.innerHTML += "<li>".concat(persona, "</li>");
});
div_personas.innerHTML += "</ul>";