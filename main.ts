let mi_variable: string = "Una variable";

// FALSO
// mi_variable=12

// VERDADERO
mi_variable = "12";

let numero: number = 26;
let verdadero: boolean = true;
let cualquiera: any = "puedo meter lo que sea";

// CORRECTO
verdadero = false;

// Constantes
const nombre: string = "Samuel Velasco";

//FALSO
// nombre="Pepe"

let texto: string = "velascodev.fr";

console.log(texto, numero, verdadero);

let personas: string[] = ["Samuel", "Romane", "Luis"];

let div_personas: HTMLElement | null = document.querySelector("#personas");

div_personas.innerHTML =
  "<ul>" +
  personas
    .map((persona) => {
      return `<li>${persona}</li>`;
    })
    .join("");

("</ul>");
