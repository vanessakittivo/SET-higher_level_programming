const header = document.querySelector('header');
const toggleHeader = document.querySelector('#toggle_header');

toggleHeader.addEventListener('click', () => {
  header.classList.toggle('red');
  header.classList.toggle('green');
});
