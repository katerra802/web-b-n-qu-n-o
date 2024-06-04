
function dropDown() {
  var dropdown = document.querySelector('.dropdown-range');
  dropdown.classList.toggle('show');

  var icon = document.getElementById('dropdown-icon');
  icon.classList.toggle('rotate');
}

//Đóng dropdown khi nhấn ra ngoài
window.onclick = function(event) {
  if (!event.target.matches('.loc-theo-gia')) {
      var dropdowns = document.getElementsByClassName("dropdown-range");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
              icon.classList.remove('rotate');
          }
      }
  }
}