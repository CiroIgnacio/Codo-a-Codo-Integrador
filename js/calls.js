import { getSummary, clear, getResultByCategory, getEl, getResultAll } from "./functions.js";
import { data } from "./data.js"

const resultBtn = getEl("result-btn");
const clearResult = getEl("delete-btn");
const resultSpan = getEl("result-span");
const form = getEl("form-modal");
const summary = getEl("summary");

let result = 0;

resultBtn.addEventListener("click", () => {
    let cat = getEl("category-select").value;
    let quant = getEl("quantity-input").value;
    console.log(typeof(result))
    
    getResultByCategory(data, cat, quant, 200, 1); // por cada click en resumen guardo la cantidad de entradas seleccionadas para la categoria
    
    result = getResultAll(data, 200); // llamo a la funcion que consolida el total de lo seleccionado

    summary.innerText = "Resumen seleccion: " + getSummary(data); // armo un resumen para que el usuario sepa qué fue eligiendo

    resultSpan.innerText = result.toFixed(2);
    
});

clearResult.addEventListener("click", () => {
    clear(data, form, resultSpan, summary); // limpia el formulario y resetea los valores del array que guarda la info data.js
    result = 0;
});

