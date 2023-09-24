let sharedText = "";

// Export the sharedText variable
export { sharedText };

export function initP2(){
  document.getElementById("btn-save-text").addEventListener("click", gettext)
}

function gettext(){
  sharedText = document.getElementById("input-text").value;
  document.getElementById("text").innerText = sharedText;
}
