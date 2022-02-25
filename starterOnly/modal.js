function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
//bouton je m'inscris
const modalBtn = document.querySelectorAll(".modal-btn"); 

//const formData = document.querySelectorAll(".formData");

// ouvrir le formulaire
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// affichage du formulaire
function launchModal() {
  modalbg.style.display = "block";
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
