/*
1. dès qu'on clique sur le boutton, on ajoute la classe visible à l'élement suivant




var btS = document.querySelector('.spoiler button')

//detection du clique
btS.addEventListener('click', function(){
  this.nextElementSibling.classList.add('visible')
  this.parentNode.removeChild(this)
})
*/

var spoilers = document.querySelectorAll('.spoiler');

let createSpoilerbtn = function(element){
  let btnS = document.createElement('button')
  btnS.textContent = "Attention Spoiler"
  element.appendChild(btnS)
}
for (let i = 0; i < spoilers.length; i++) {
  createSpoilerbtn(spoilers[i])
}