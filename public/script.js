// Selecting the recipe
const recipes = document.querySelectorAll('.recipe')

for (let recipe of recipes){
  recipe.addEventListener('click',function(){
    const recipeId = recipe.getAttribute('id')
    window.location.href = `/recipes/${recipeId}`
  })
  
}

// Esconder/Mostrar
const ingredients = document.querySelector('ul.ingredients')
const preparation = document.querySelector('p.preparation')
const information = document.querySelector('p.information')


const steps = document.querySelectorAll('button')

for (let step of steps){
  step.addEventListener('click',function(){
    if (step.innerHTML == 'ESCONDER'){
      step.innerHTML = 'MOSTRAR'
    } else {
      step.innerHTML = 'ESCONDER'
    }

    const idButton = step.getAttribute('id')
    
    if (idButton == 'ingredients-button'){
      if (ingredients.classList.contains('hide')){
        ingredients.classList.remove('hide')
      } else {
        ingredients.classList.add('hide')
      }
    } else if (idButton == 'preparation-button'){
      if (preparation.classList.contains('hide')){
        preparation.classList.remove('hide')
      } else {
        preparation.classList.add('hide')
      }
    } else {
      if (information.classList.contains('hide')){
        information.classList.remove('hide')
      } else {
        information.classList.add('hide')
      }
    }
    
  })
}