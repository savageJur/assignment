'use strick';



/**
 * add event on element
 */


const addEventOnElem = function (elem, type , callback ) {
    if (elem.length > 1) {
        for (let i =0; i < elem.length; i++) { 
            elem[i].addEventListener( type, callback)
            
        }
    } else {
        elem.addEventListener(type,callback)
    }


}


/**
 * navbar toggle
 */
const navbar = document.querySelector("[data-navbar]")
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar =() => navbar.classList.toggle("active");

addEventOnElem( navToggler, "click", toggleNavbar);
 
const closeNavbar =() => navbar.classList.remove("active")

addEventOnElem(navLinks,"click", closeNavbar)


/**
 * header active when scroll down to 100px
 */
const header = document.querySelector("[data-header]");

const headerActive = function () {
    if (window.scrollY >  100) {
        header.classList.add("active");

    } else{
        header.classList.remove("active");

    }
}

addEventOnElem(window, "scroll", headerActive);
 

/**
 * filter function
 */
const filterBtns = document.querySelectorAll("[data-filter-btn]");  // Select filter buttons
const filterItems = document.querySelectorAll("[data-filter]");      // Select filter items

let lastClickedFilterBtn = filterBtns[0];  // Initially set the first filter button as active

// The filter function to show or hide items based on the selected filter
const filter = function () {
  // Remove the "active" class from the last clicked filter button
  lastClickedFilterBtn.classList.remove("active");

  // Add the "active" class to the currently clicked filter button
  this.classList.add("active");

  // Update the last clicked filter button reference
  lastClickedFilterBtn = this;

  // Loop through all filter items
  for (let i = 0; i < filterItems.length; i++) {
    // Check if the current filter matches the filter data or if "all" is selected
    if (this.dataset.filterBtn === filterItems[i].dataset.filter || this.dataset.filterBtn === "all") {
      // Show the item
      filterItems[i].style.display = "block";
      filterItems[i].classList.add("active");
    } else {
      // Hide the item
      filterItems[i].style.display = "none";
      filterItems[i].classList.remove("active");
    }
  }
};

// Add the event listener to each filter button
filterBtns.forEach(button => {
  button.addEventListener("click", filter);
});