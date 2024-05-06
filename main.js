const buttonDone = document.querySelector('.done');
const overlay = document.querySelector('.overlay');
const order = document.querySelector('.order');
const orderDishName = order.querySelector('.dish .order-name');
const orderDishPrice = order.querySelector('.dish .order-price');
const orderDrinkName = order.querySelector('.drink .order-name');
const orderDrinkPrice = order.querySelector('.drink .order-price');
const orderDessertName = order.querySelector('.dessert .order-name');
const orderDessertPrice = order.querySelector('.dessert .order-price');
const alertMessage = document.querySelector('.alert-message');
let selectedDish = null;
let selectedDishName = null;
let selectedDishPrice = null;
let selectedDrink = null;
let selectedDrinkName = null;
let selectedDrinkPrice = null;
let selectedDessert = null;
let selectedDessertName = null;
let selectedDessertPrice = null;
let countDish = null;
let countDrink = null;
let countDessert = null;

function selectDish (option) {
  selectedDish = document.querySelector('.dish .selected');
  
  if ( selectedDish !== null && !option.classList.contains('selected') ) {
    selectedDish.classList.remove('selected');
    selectedDish.querySelector('ion-icon').classList.add('hidden');
  }
  
  if (!option.classList.contains('selected')) {
    selectedDish = option;
    selectedDishName = selectedDish.querySelector('h3');
    selectedDishPrice = selectedDish.querySelector('span');
    orderDishName.innerHTML = selectedDishName.innerHTML;
    orderDishPrice.innerHTML = selectedDishPrice.innerHTML;
  } else {
    selectedDish = null;
  }
  
  option.classList.toggle('selected');
  option.querySelector('ion-icon').classList.toggle('hidden');
  checkOptions ();
}

function selectDrink (option) {
  selectedDrink = document.querySelector('.drink .selected');

  if ( selectedDrink !== null && !option.classList.contains('selected') ) {
    selectedDrink.classList.remove('selected');
    selectedDrink.querySelector('ion-icon').classList.add('hidden');
  }
  
  if (!option.classList.contains('selected')) {
    selectedDrink = option;
    selectedDrinkName = selectedDrink.querySelector('h3');
    selectedDrinkPrice = selectedDrink.querySelector('span');
    orderDrinkName.innerHTML = selectedDrinkName.innerHTML;
    orderDrinkPrice.innerHTML = selectedDrinkPrice.innerHTML;
  } else {
    selectedDrink = null;
  }

  option.classList.toggle('selected');
  option.querySelector('ion-icon').classList.toggle('hidden');
  checkOptions ();
}

function selectDessert (option) {
  selectedDessert = document.querySelector('.dessert .selected');

  if ( selectedDessert !== null && !option.classList.contains('selected') ) {
    selectedDessert.classList.remove('selected');
    selectedDessert.querySelector('ion-icon').classList.add('hidden');
  }
  
  if (!option.classList.contains('selected')) {
    selectedDessert = option;
    selectedDessertName = selectedDessert.querySelector('h3');
    selectedDessertPrice = selectedDessert.querySelector('span');
    orderDessertName.innerHTML = selectedDessertName.innerHTML;
    orderDessertPrice.innerHTML = selectedDessertPrice.innerHTML;
  } else {
    selectedDessert = null;
  }

  option.classList.toggle('selected');
  option.querySelector('ion-icon').classList.toggle('hidden');
  checkOptions ();
}

function checkOptions () {
  if (selectedDish !== null) {countDish = 1} else {countDish = 0}    
  if (selectedDrink !== null) {countDrink = 1} else {countDrink = 0}
  if (selectedDessert !== null) {countDessert = 1} else {countDessert = 0}
  
  const optionsRemaining = 3 - (countDish + countDrink + countDessert);
  
  if ( selectedDish !== null && selectedDrink !== null && selectedDessert !== null ) {
    buttonDone.classList.add('all-selected');
    buttonDone.innerHTML = 'Fechar pedido';
    calculateTotal();
  } else {
    buttonDone.classList.remove('all-selected');
    buttonDone.innerHTML = `Selecione os ${optionsRemaining} itens<br />para fechar o pedido`;
  }
  
  buttonDone.classList.remove('alert');
  alertMessage.innerHTML = null;
}

function calculateTotal () {
  let orderTotalPrice = order.querySelector('.total-price');
  let formatedDishPrice = Number(selectedDishPrice.innerHTML.replace("R$ ", "").replace(",", "."));
  let formatedDrinkPrice = Number(selectedDrinkPrice.innerHTML.replace("R$ ", "").replace(",", "."));
  let formatedDessertPrice = Number(selectedDessertPrice.innerHTML.replace("R$ ", "").replace(",", "."));
  let totalPrice = (formatedDishPrice+formatedDrinkPrice+formatedDessertPrice).toFixed(2);
  let formatedTotalPrice = `R$ ${totalPrice}`.replace(".", ",");
  
  orderTotalPrice.innerHTML = formatedTotalPrice
}

function openOrder () {
  if ( selectedDish !== null && selectedDrink !== null && selectedDessert !== null ) {
    overlay.classList.remove('hidden');
    order.classList.remove('hidden');
  } else {
    buttonDone.classList.add('alert');
    alertMessage.innerHTML = 'Você ainda não completou o seu pedido';
  }
}

function closeOrder () {
  overlay.classList.add('hidden');
  order.classList.add('hidden');
}