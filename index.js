// global scope variable
var customerName = 'bob'

// uppercase function
function upperCaseCustomerName(){
 return customerName = customerName.toUpperCase();
}


// best customer

function setBestCustomer(){ 
  
  return bestCustomer  = 'not bob';
}


// change best customer - works
function overwriteBestCustomer(){
  return bestCustomer = "maybe bob"
}


// try changing variable declared by const - works
const leastFavoriteCustomer = "Wayne Dyer"
function changeLeastFavoriteCustomer(){
  return leastFavoriteCustomer = "Esther Hicks"
}
