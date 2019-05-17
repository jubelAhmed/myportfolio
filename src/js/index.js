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


