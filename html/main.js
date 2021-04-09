// sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');

function action () {
  console.log('clik')
  document.getElementById('nav').classList.toggle('active');
  console.log(document.getElementById('nav'))
}