/**
 * Inserir a class active ao modal-overlay
 * Trocar a imagem/nome/autor
 * fechar o modal
 */


const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.recipe')

for (let recipe of recipes) {
  recipe.addEventListener('click',function(){
    modalOverlay.classList.add('active')

    const recipeId = recipe.getAttribute('id')
    
    // Imagem
    modalOverlay.querySelector('img').src = `Materials/Recipes/${recipeId}.png`
    modalOverlay.querySelector('img').alt = recipeId

    // Nome da receita
    modalOverlay.querySelector('.recipe-name').innerHTML = recipe.querySelector('.recipe-name').innerHTML

    // Autor
    modalOverlay.querySelector('.author').innerHTML = recipe.querySelector('.author').innerHTML

  })
}



// Fechando o modal
document.querySelector('.close-modal').addEventListener('click', function(){
  modalOverlay.classList.remove('active')
})