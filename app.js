//This function runs whenever any elements with the class 'hidden' is in the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    //Checks if the element is intersecting with the viewport
    if (entry.isIntersecting) {
      //If the element is intersecting, it adds the 'show' class to the element
      entry.target.classList.add('show');
    } else {
      //If the element is not intersecting, it removes the 'show' class from the element
      entry.target.classList.remove('show');
    }
  });
});


//Selects all elements with the class 'hidden' and observes them using the observer
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));