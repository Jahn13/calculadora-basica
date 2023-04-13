const calculadora = document.querySelector("#datos");

const limpiar = document.querySelector("#clean");
const igual = document.querySelector("#r");
let resultado = 0;

const btn = document.querySelectorAll("#num");
for(i=0;i<btn.length;i++){
    btn[i].addEventListener("click", (event) => {
        calculadora.value += event.target.value;
    })
}

limpiar.addEventListener("click", () => {
  resultado = 0;
  calculadora.value = ""; 
});

igual.addEventListener("click", () => {
  try{
    resultado = eval(calculadora.value);
    calculadora.value = resultado;
  }catch(error){
    calculadora.value = "expresion mal formada"
  }
});


