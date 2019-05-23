document.addEventListener("DOMContentLoaded", (e) => {
  var bars = document.getElementById('links-bars');
  var menu = document.getElementById('links-body');
  bars.addEventListener('click', (e) => {
    menu.classList.toggle('hide-middle');
  });
});