import { SERVER_URL } from "../../settings.js";
import { makeOptions, handleHttpErrors} from "../../utils.js"

export function initEditCar(){
  document.getElementById("find-car-to-edit").addEventListener("click", findCar)
  document.getElementById("edit-car").addEventListener("click", editCar)
}


async function findCar(){
  document.getElementById("error").innerText = ""
  document.getElementById("carForm").innerText = ""
  document.getElementById("edit-car").style.display = "none"
  const form = document.getElementById('carForm')
  form.style.display = "block"
  if(document.getElementById("text-for-id2").value === ""){
    document.getElementById("error").innerText = "Please enter an id"
    return
  }
 
  const id = document.getElementById("text-for-id2").value
  try {
  const car = await fetch(SERVER_URL + "/" + id)
  .then(handleHttpErrors)
  document.getElementById("edit-car").style.display = "block"
document.getElementById("carForm").innerHTML = `
<br>
<div class="row mb-3">
      <label for="brand" class="col-sm-2 col-form-label">Brand</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="brand"
          name="brand"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="model" class="col-sm-2 col-form-label">Model</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="model"
          name="model"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="pricePrDay" class="col-sm-2 col-form-label"
        >Price Per Day</label
      >
      <div class="col-sm-10">
        <input
          type="number"
          step="0.01"
          class="form-control"
          id="pricePrDay"
          name="pricePrDay"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="bestDiscount" class="col-sm-2 col-form-label"
        >Best Discount</label
      >
      <div class="col-sm-10">
        <input
          type="number"
          class="form-control"
          id="bestDiscount"
          name="bestDiscount"
        />
      </div>
    </div>
`
      form.brand.value = car.brand;
      form.model.value = car.model;
      form.pricePrDay.value = car.pricePrDay;
      form.bestDiscount.value = car.bestDiscount
} catch(e){
  document.getElementById("error").innerText = e.message
}
}

function editCar(evt){
  evt.preventDefault();
  const id = document.getElementById("text-for-id2").value
  const form = document.getElementById('carForm');
    const updatedCar = {
      brand: form.brand.value.trim(),
      model: form.model.value.trim(),
      pricePrDay: parseFloat(form.pricePrDay.value),
      bestDiscount: parseInt(form.bestDiscount.value)
    };

    const options = makeOptions("PUT", updatedCar);
    fetch(SERVER_URL + "/" + id, options)
    .then(handleHttpErrors)
    .then(alert("Car updated successfully!"))
    form.style.display = "none"
    document.getElementById("edit-car").style.display = "none"
}