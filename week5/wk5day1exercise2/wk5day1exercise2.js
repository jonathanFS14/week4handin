const COUNTRY_API = "https://countries.plaul.dk/api/countries"

document.getElementById("svg2").addEventListener("click", showCountry)

let previousCountry;

function showCountry(evt) {
  const elementPressed = evt.target;
  const id = elementPressed.id;
  if (previousCountry) {
    previousCountry.style.fill = "lightgrey";
  }

  elementPressed.style.fill = "blue";
  previousCountry = elementPressed;

  fetch(COUNTRY_API + "/" + id)
    .then((res) => res.json())
    .then( (country) => {
      const infoElement = document.getElementsByClassName("info")[0]; 
      const currencyInfo = Object.values(country.currencies).map(
        (currency) => `${currency.name} (${currency.symbol})`
      )
      infoElement.innerHTML = `
      <p> <img src="${country.flag}"></p>
        <p>Country: ${country.name.common}</p>
        <p>Member of UN: ${country.unMember}</p>
        <p>Currencies: ${currencyInfo.join(", ")}</p>
        <p>Capital: ${country.capital}</p>
        <p>Borders: ${country.borders}</p> `;
    })
    .catch((error) => {
        console.error("Error fetching country data:", error)
        const infoElement = document.getElementsByClassName("info")[0];
      infoElement.innerHTML = "<p>No information available for this country.</p>";
      })
}
