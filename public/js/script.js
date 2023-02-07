let addIngredientsBtn = document.getElementById('addIngredientsBtn');
let ingredientsList = document.querySelector('.ingredientsList');
let ingredeintDiv =  document.querySelectorAll('.ingredeintDiv')[0];

addIngredientsBtn.addEventListener('click',function(){
    let newIngredients = ingredeintDiv.cloneNode(true);
    let input = newIngredients.getElementsByTagName('input')[0];
    input.value = '';
    ingredientsList.appendChild(newIngredients);
});