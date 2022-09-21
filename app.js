
//1. dès qu'on clique sur le boutton, on ajoute la classe visible à l'élement suivant


/*

var btS = document.querySelector('.spoiler button')

//detection du clique
btS.addEventListener('click', function(){
  this.nextElementSibling.classList.add('visible')
  this.parentNode.removeChild(this)
})
*/



//ETAPE 1: recupération des element ayant la classe spoiler et preparation d'une foinction pour 
// creer des boutton  et une span de clase spoiler-content pour chacun de ses elements
var spoilers = document.querySelectorAll('.spoiler');
let createSpoilerbtn = function(element){
  
  //creation button
  let btnS = document.createElement('button')
  btnS.textContent = "Attention Spoiler"
  
//-------------------------------------------------------------------------fin etape 1



  //creation span
  let spanSpoilerContent = document.createElement('span')
  spanSpoilerContent.className = "spoiler-content"
  spanSpoilerContent.innerHTML = element.innerHTML


  //ajout du buton et du span au Dom
  // d'ab on nettoie l'éelement ancien
  element.innerHTML  = ""
  element.appendChild(btnS)
  element.appendChild(spanSpoilerContent)

  // event sur les btn
  btnS.addEventListener('click', function(){
    btnS.parentNode.removeChild(btnS)
    spanSpoilerContent.classList.add('visible')
  })
}

// étape 2 création des boutton pour chaques span spoiler
for (let i = 0; i < spoilers.length; i++) {
  createSpoilerbtn(spoilers[i])
}