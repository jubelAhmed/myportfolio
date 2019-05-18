import '../styles/index.scss';
import '../styles/test.scss';


// Add active class to the current button (highlight it)
var header = document.getElementById("navID");
var navItem = header.getElementsByClassName("nav-item");
for (var i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}


// when scrolling then active the current nav item --- start
let mainNavLinks = document.querySelectorAll("nav a ");
let mainSections = document.querySelectorAll("main section");

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY+10;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);
   
    if ( section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add("active");
      link.classList.add("animate-navitem");
    } else {
      link.classList.remove("active");
      link.classList.remove("animate-navitem");
    }
  });
});

// end scroll active


