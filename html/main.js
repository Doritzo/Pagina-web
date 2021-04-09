// sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');

// Demo Event
btnToggle.addEventListener('click', function(){
  console.log('Clicked')
})

//Transition

function action () {
  console.log('clik')
  document.getElementById('nav').classList.toggle('active');
  console.log(document.getElementById('nav'))
}
