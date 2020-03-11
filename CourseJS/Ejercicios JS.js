// Ejercicios JS
//FUNCION DECLARADA
function thisIsFunction(){
  console.log("uno")
  console.log("dos")
  console.log("tres")
  console.log("cuato")
  return "arroja el retono de la funcion";
}
let valor_de_funcionn = thisIsFunction()

 
//funcion invocation 
thisIsFunction(); 

//funcion declarada
declarada()
function declarada(){
  console.log("se puede ejecutar en cualquier parte del codigo")
}
declarada()

// funcion anonima y expresada
const funcionExpresada = function(){
 console.log("funcion que se le asigna como valor a una variable const")
} 
funcionExpresada();


// ***********ARREGLOS*********

const colores = ["rojo","verde","azul"]

colores.forEach(function(el, index){
  console.log(`<li id="${index}">${el}</li>`)
}); 

 push() //agrega elementos a un arrelgo
 pop() //quita el ultimo elemento de un arreglo