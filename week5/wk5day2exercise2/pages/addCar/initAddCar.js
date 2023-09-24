import { SERVER_URL } from "../../settings.js";
import { makeOptions, handleHttpErrors} from "../../utils.js"

export function initAddCar(){
  document.getElementById("add-car").addEventListener("click", addCar)
}

  function addCar(){
    const car = {
      brand: document.getElementById("brand").value,
      model: document.getElementById("model").value,
      pricePrDay: document.getElementById("pricePrDay").value,
      bestDiscount: document.getElementById("bestDiscount").value
    }

    const options = makeOptions("POST", car);
    fetch(SERVER_URL, options)
    .then(handleHttpErrors)
    .then(carResponse => document.getElementById("new-car-response")
      .innerText = JSON.stringify(carResponse, null, 3))
  }