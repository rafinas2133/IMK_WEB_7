
const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");


loginButton.addEventListener("click", function (e) {
  e.preventDefault(); 
  window.location.href = "main.html";
});

registerButton.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "register.html";
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

