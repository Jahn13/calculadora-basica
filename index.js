const calculadora = document.querySelector("#datos");

const limpiar = document.querySelector("#clean");
const igual = document.querySelector("#r");
let resultado = 0;

//Escuchará el click de los botones de numeros y los operadores
const btn = document.querySelectorAll("#num");
for(i=0;i<btn.length;i++){
    btn[i].addEventListener("click", (event) => {
        calculadora.value += event.target.value;
    })
}
//Limpia el resultado y el value del input
limpiar.addEventListener("click", () => {
  resultado = 0;
  calculadora.value = ""; 
});

//Click del igual que ejecutará la función del value y el resultado lo pondrá en el value del input
igual.addEventListener("click", () => {
  try{
    resultado = eval(calculadora.value);
    calculadora.value = resultado;
  }catch(error){
    calculadora.value = "expresion mal formada"
  }
});


