/*
1. dès qu'on clique sur le boutton, on ajoute la classe visible à l'élement suivant


*/

var btS = document.querySelector('.spoiler button')

//detection du clique
btS.addEventListener('click', function(){
  this.nextElementSibling.classList.add('visible')
  this.parentNode.removeChild(this)
})