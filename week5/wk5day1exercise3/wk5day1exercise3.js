/*
document.getElementById("btn-get-all").addEventListener("click", function () {
  // Make a GET request to your API endpoint
  fetch("http://localhost:8080/api/members")
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data and update the Members list
      const membersList = document.getElementById("members-list");
      membersList.innerHTML = ""; // Clear the previous list

      data.forEach((member) => {
        const listItem = document.createElement("li");
        listItem.textContent = `username: ${member.username}, Name: ${member.firstName}`;
        membersList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error is:", error);
    });
});

document.getElementById("find-by-id").addEventListener("click", function () {
  const idInput = document.getElementById("text-for-id").value;
  if (idInput == " " || idInput == "") {
    alert("Please enter a valid ID");
    return;
  }
  fetch("http://localhost:8080/api/members/" + idInput)
    .then((response) => {
      if (response.status === 404) {
        return; 
      } else (response.status === 200) 
        return response.json();
    })
    .then((member) => {
      const memberList = document.getElementById("member-id-list");
      memberList.innerHTML = ""; // Clear the previous list
      if (member !== undefined) {
        const listItem = document.createElement("li");
        listItem.textContent = `username: ${member.username}, Name: ${member.firstName}`;
        memberList.appendChild(listItem);
      } else {
        const listItem = document.createElement("li");
        listItem.textContent = "Member not found";
        memberList.appendChild(listItem);
      }
    })
    .catch((error) => {
      console.error("Error is:", error);
    })
})
*/

const SERVER_URL = 'http://localhost:8080/api/cars'

document.getElementById("btn-get-all").addEventListener("click", getAllCars)
document.getElementById("find-by-id").addEventListener("click", getOneCar)
document.getElementById("add-car").addEventListener("click", addCar)
document.getElementById("find-car-to-edit").addEventListener("click", editCar)

function editCar(evt) {
  evt.preventDefault();
  // Get the car ID from the user input
  const id = document.getElementById("text-for-id2").value;

  // Fetch the car data from the server
  fetch(SERVER_URL + "/" + id)
    .then((res) => {
      if (!res.ok) {
        return alert("Car not found");
      }
      return res.json();
    })
    .then((car) => {
      // Pre-fill the form with the car data for editing
      const form = document.getElementById('carForm-edit');
      form.brand.value = car.brand;
      form.model.value = car.model;
      form.pricePrDay.value = car.pricePrDay;
      form.bestDiscount.value = car.bestDiscount;

      // Add an event listener to update the car data on submit
      form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        const updatedCar = {
          brand: form.brand.value.trim(),
          model: form.model.value.trim(),
          pricePrDay: parseFloat(form.pricePrDay.value),
          bestDiscount: parseInt(form.bestDiscount.value),
        };

        // Send a PUT request to update the car data
        const options = {
          method: "PUT",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedCar)
        };

        fetch(SERVER_URL + "/" + id, options)
          .then(response => response.json())
          .then(updatedCarResponse => {
            // Handle the response as needed, e.g., display a success message
            alert("Car updated successfully!");
          })
          .catch(error => {
            console.error("Error:", error);
          });
      });
    })
   
}

function addCar(evt) {
  evt.preventDefault();
  const form = document.getElementById('carForm');
  const brand = form.brand.value.trim();
  const model = form.model.value.trim();
  const pricePrDay = parseFloat(form.pricePrDay.value);
  const bestDiscount = parseInt(form.bestDiscount.value);
  if (!brand || !model || isNaN(pricePrDay) || isNaN(bestDiscount)) {
    alert("Please fill in all the required fields with valid data.");
    return;
  }
  const newCar = {
    brand: brand,
    model: model,
    pricePrDay: pricePrDay,
    bestDiscount: bestDiscount,
  };
  const options = {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newCar)
  };
  fetch(SERVER_URL, options)
    .then(response => response.json())
    .then(carResponse => document.getElementById("new-car-response")
      .innerText = JSON.stringify(carResponse, null, 3))
    .catch(error => { console.error("Error:", error)
   });
}


function getOneCar(){
    const id = document.getElementById("text-for-id").value
    fetch(SERVER_URL + "/" + id)
    .then(res => {
        if (!res.ok){
         return document.getElementById("found-car").innerText
          = 'car not found'
        }
        return res.json()
    })
    .then(car => {document.getElementById("found-car").innerText
    = JSON.stringify(car,null,2)
})
}

function getAllCars(){
    fetch(SERVER_URL)
    .then(res => res.json())
    .then( (cars) => {
       const tableRows = cars.map(car => `
        <tr>
        <td> ${car.id}</td>
        <td> ${car.brand}</td>
        <td> ${car.model}</td>
        <td> ${car.pricePrDay}</td>
        <td> ${car.bestDiscount}</td>
        </tr>
        ` )
        const rowAsStr = tableRows.join("")
        document.getElementById("tbody").innerHTML = rowAsStr
    })
}

