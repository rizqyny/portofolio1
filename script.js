// Modal projects
const modals = document.querySelectorAll('.modal');
function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}
window.onclick = function(e) {
  modals.forEach(m => {
    if (e.target === m) m.style.display = 'none';
  });
}

// Footer dynamic year
document.getElementById('year').textContent = new Date().getFullYear();
