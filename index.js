/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("sideNav").style.width = "280px";
    document.getElementById("page-top").style.width = "70%";
    document.getElementById("main").style.marginRight = "280px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("page-top").style.width = "100%";
    document.getElementById("main").style.marginRight = "0";
  } 