const revenues = document.querySelectorAll('.revenue')
const modalOverlay = document.querySelector('.modal-overlay')

for (let revenue of revenues){
  revenue.addEventListener('click', function(){
    modalOverlay.classList.add('active')
    const revenueId = revenue.getAttribute('id')
    modalOverlay.querySelector('img').src = `../assets/${revenueId}.png`

    infoRevenue(revenueId)
  })
}

document.querySelector('#close-modal').addEventListener('click', function(){
  modalOverlay.classList.remove('active')
})

function infoRevenue(revenue){
  let revenues = [
    {
      id:'burger',
      name: 'Triplo Bacon Burguer',
      author:'Jorge Relato',
    }, 
    {
      id:'pizza',
      name:'Pizza 4 estações',
      author: 'Fabiana Melo'
    },
    {
      id:'espaguete',
      name:'Espaguete alho',
      author: 'Júlia Kinoto'
    },
    {
      id:'lasanha',
      name:`Lasanha mac n' cheese`,
      author: 'Juliano Vieira'
    },
    {
      id:'doce',
      name:'Docinhos pão-do-céu',
      author: 'Ricardo Golvea'
    },
    {
      id:'asinhas',
      name:'Asinhas de frango ao barbecue',
      author: 'Vania Steroski'
    },
    {
      id:'baiao',
      name:'Baião de dois',
      author:'Karla Monteiro'
    },
    {
      id:'churrasco',
      name:'Churrasco fino',
      author:'Renato Barbosa'
    },
    {
      id:'sushi',
      name:'Sushique',
      author:'Takama Sanomuro'
    },
    {
      id:'yakisoba',
      name:'Yakisoba de carne',
      author:'Roberta Iuky'
    },
    {
      id:'parmegiana',
      name:'Filé de frango à parmegiana',
      author:'Carine Correa'
    },
    {
      id:'taco',
      name:'Taco mexicano',
      author:'Tatiana Rojas'
    },
  ];
  
  for (i =0; i < revenues.length; i++){
    if (revenues[i].id === revenue) {
      modalOverlay.querySelector('.revenue-name').innerHTML = revenues[i].name;
      modalOverlay.querySelector('.author').innerHTML = `por ${revenues[i].author}`;
    } 
  }
}
