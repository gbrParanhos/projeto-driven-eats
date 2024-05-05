let selectedDish = null
let selectedDrink = null
let selectedDessert = null

function selectDish (option) {
  selectedDish = document.querySelector('.dish .selected')
  if ( selectedDish !== null && !option.classList.contains('selected') ) {
    selectedDish.classList.remove('selected');
    selectedDish.querySelector('ion-icon').classList.add('hidden');
  } else if (!option.classList.contains('selected')) {
    selectedDish = option
  } else {
    selectedDish = null
  }

  option.classList.toggle('selected');
  option.querySelector('ion-icon').classList.toggle('hidden');
  checkOptions ();
}

function selectDrink (option) {
  selectedDrink = document.querySelector('.drink .selected')

  if ( selectedDrink !== null && !option.classList.contains('selected') ) {
    selectedDrink.classList.remove('selected');
    selectedDrink.querySelector('ion-icon').classList.add('hidden');
  } else if (!option.classList.contains('selected')) {
    selectedDrink = option
  } else {
    selectedDrink = null
  }

  option.classList.toggle('selected');
  option.querySelector('ion-icon').classList.toggle('hidden');
  checkOptions ();
}

function selectDessert (option) {
  selectedDessert = document.querySelector('.dessert .selected')

  if ( selectedDessert !== null && !option.classList.contains('selected') ) {
    selectedDessert.classList.remove('selected');
    selectedDessert.querySelector('ion-icon').classList.add('hidden');
  } else if (!option.classList.contains('selected')) {
    selectedDessert = option
  } else {
    selectedDessert = null
  }

  option.classList.toggle('selected');
  option.querySelector('ion-icon').classList.toggle('hidden');
  checkOptions ();
}

function checkOptions () {
  const buttonDone = document.querySelector('.done')

  if ( selectedDish !== null && selectedDrink !== null && selectedDessert !== null ) {
    buttonDone.classList.add('all-selected')
    buttonDone.innerHTML = 'Fechar pedido'
  } else {
    buttonDone.classList.remove('all-selected')
    buttonDone.innerHTML = 'Selecione os 3 itens<br />para fechar o pedido'
  }
}