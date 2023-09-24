import { SERVER_URL } from "../../settings.js"
import { handleHttpErrors} from "../../utils.js"

export function initFindCar(){
  document.getElementById("btn").addEventListener("click", findCar )
}

async function findCar(){
  document.getElementById("error").innerText = ""
  document.getElementById("result").innerText = ""
  const id = document.getElementById("car-id").value
  try {
  const car = await fetch(SERVER_URL + "/" + id)
  .then(handleHttpErrors)
document.getElementById("result").innerText = JSON.stringify(car,null,3)
} catch(e){
  document.getElementById("error").innerText = e.message
}
}