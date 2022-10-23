// funcion para obtener el objeto por el id de categoria (matchea con valores del select HTML)

const getObj = (data, categoryId) => {
  const obj = data.find((element) => element["id"] == categoryId);
  return obj;
};

// funcion que calcula el total por categoria y además realiza el mantenimiento de la propiedad quantity

export const getResultByCategory = (data, categoryId, quantity, value, increment) => {
  const obj = getObj(data, categoryId);
  if (increment > 0)
    obj["quantity"] = parseInt(obj["quantity"]) + parseInt(quantity);
  if (obj) return ((1 - obj["discount"]) * obj["quantity"] * value);
  else return 0;
};

// funcion que totaliza el valor considerando todas las categorias

export const getResultAll = (data, value) => {
    let result = 0;
    data.forEach(obj => {
        result = result + ((1 - obj["discount"]) * obj["quantity"] * value);
    });
    return result;
}

// funcion regular acortada con el fin de escribir menos ya que se la llama muchas veces

export const getEl = (id) => document.getElementById(id);

// funcion que resetea todos los valores de los objetos involucrados

export const clear = (data, form, res, summary) => {
  form.reset();
  res.innerText = "";
  summary.innerText = "";
  data.forEach((element) => {
    element["quantity"] = 0;
  });
};

// funcion que arma mensaje informativo de cara al usuario

export const getSummary = (data) => {
    const stud = data.find((element) => element["type"] == "Estudiante");
    const trs = data.find((element) => element["type"] == "Trainee");
    const jrs = data.find((element) => element["type"] == "Junior");
    return `Estudiantes: ${stud["quantity"]} -> $${getResultByCategory(data, stud["id"], stud["quantity"], 200, 0).toFixed(2)} | Trainees: ${trs["quantity"]} -> $${getResultByCategory(data, trs["id"], trs["quantity"], 200).toFixed(2)} | Juniors: ${jrs["quantity"]} -> $${getResultByCategory(data, jrs["id"], jrs["quantity"], 200).toFixed(2)}`;
}