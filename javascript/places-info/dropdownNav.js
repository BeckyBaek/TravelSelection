/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

// onClick - show a list of other places to visit
function showPlacesList() {
  var subListOfPlaces = document.getElementById("otherPlaces");
  // If list of other places to visit is hidden when clicking
  if (subListOfPlaces.hidden == true) {
    // Diminish a hidden attribute and display it
    subListOfPlaces.hidden = false;
  }
  // If list is shown when clicking
  else {
    // Add a hidden attribute and hide it
    subListOfPlaces.hidden = true;
  }
}

// onClick - show a list of equipments no matter where to trip
function showEssentialList() {
  // If a list of essential items for travelers is hidden when clicking
  var subListOfEssentials = document.getElementById("essentialEquipments");
  if (subListOfEssentials.hidden == true) {
    // Diminish a hidden attribute and display it
    subListOfEssentials.hidden = false;
  } // If list is shown when clicking
  else {
    // Add a hidden attribute and hide it
    subListOfEssentials.hidden = true;
  }
}

// onClick - show a list of equipments no matter where to trip
function showReviewLinks() {
  // If a list of essential items for travelers is hidden when clicking
  var subListOfReviewCatergory = document.getElementById("reviewsByCategories");
  if (subListOfReviewCatergory.hidden == true) {
    // Diminish a hidden attribute and display it
    subListOfReviewCatergory.hidden = false;
  } // If list is shown when clicking
  else {
    // Add a hidden attribute and hide it
    subListOfReviewCatergory.hidden = true;
  }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
