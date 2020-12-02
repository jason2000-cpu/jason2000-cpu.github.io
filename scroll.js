/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
const header = document.querySelector('header');
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "-60px";
      header.classList.add(nav-scrolled);
      
  } else {
    document.getElementById("navbar").style.top = "0";
     header.classList.remove(nav-scrolled);
  }
  prevScrollpos = currentScrollPos;
}