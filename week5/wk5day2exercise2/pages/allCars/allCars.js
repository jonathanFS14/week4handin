import {SERVER_URL} from "../../settings.js"
import { handleHttpErrors} from "../../utils.js"

export async function initAllCars(){
    const cars = await getCars()
  const listItems = cars.map(car => `
    <li> ${car.id}, ${car.brand} </li>
    `).join("")
    document.getElementById("cars").innerHTML = listItems //husk xss
}

async function getCars (){
  const cars = await fetch(SERVER_URL).then(handleHttpErrors)
  return cars
}


