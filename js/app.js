//Name:Joshua McCluskey
//Project: Pat's Salmon Cookies

'use strict';

//Hours array for the column heads
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let allStoresArr = [];
let hourlyTotalsArr = [];
let grandTotal = 0;
let tfoot = document.createElement('tfoot');

// Contructor function for collecting store information
function Stores(city, min, max, avg) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.sales = 0;
  this.total = 0;
  this.array = [];
  allStoresArr.push(this);

}

//Method for getting a a random number multiplied by average for each hour for each store returns to an empty array and propert this.total.

Stores.prototype.getSales = function () {
  let randoNum = getRandom(this.min, this.max);
  let avgSales = randoNum * this.avg;
  let finalAvg = Math.ceil(avgSales);
  this.sales = finalAvg;
};

// Random number generator functino used in getSales method
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is exclusive and the minimum is inclusive
}

//Renders the header inforamtion with the hours array to
function renderHeader() {
  let table = document.getElementById('cookieSales');
  let thead = document.createElement('thead');
  table.appendChild(thead);
  let tr = document.createElement('tr');
  thead.appendChild(tr);
  let th = document.createElement('th');
  th.textContent = '';
  tr.appendChild(th);

  // let td = document.createElement('td');
  // let tf = document.createElement('tf');

  for (let i = 0; i < hours.length; i++) {
    th = document.createElement('th');
    th.textContent = `${hours[i]}`;
    tr.appendChild(th);
  }
  th = document.createElement('th');
  th.textContent = 'Daily Location Total';
  tr.appendChild(th);

}

//Render table into webpage and also calculates the totals for each store location.
Stores.prototype.render = function () {
  let table = document.getElementById('cookieSales');
  let tbody = document.createElement('tbody');
  table.appendChild(tbody);
  let tr = document.createElement('tr');
  tbody.appendChild(tr);
  let th = document.createElement('th');
  th.textContent = this.city;
  tr.appendChild(th);
  let td =document.createElement('td');
  // let tf = document.createElement('tf');

  for (let i = 0; i < hours.length; i++) {
    this.getSales();
    this.array.push(this.sales);
    this.total = this.total + this.sales;
    td = document.createElement('td');
    td.textContent = `${this.sales}`;
    tr.appendChild(td);
  }

  td = document.createElement('td');
  td.textContent = this.total;
  tr.appendChild(td);
};

//Renders the bottom row of table for totals
function renderFooter() {
  getHourlyTotals();
  let table = document.getElementById('cookieSales');
  table.appendChild(tfoot);
  let tr = document.createElement('tr');
  tfoot.appendChild(tr);
  let td = document.createElement('td');
  td.textContent = 'Totals';
  tr.appendChild(td);

  for (let i = 0; i < hours.length; i++) {
    td = document.createElement('td');
    td.textContent = hourlyTotalsArr[i];
    tr.appendChild(td);
  }

  td = document.createElement('td');
  td.textContent = grandTotal;
  tr.appendChild(td);


}

//Function to get hourly totals via two dimensional array for loops
function getHourlyTotals() {

  for (let i = 0; i < hours.length; i++) {
    let total = 0;
    for (let j = 0; j < allStoresArr.length; j++) {
      total += allStoresArr[j].array[i];
    }

    hourlyTotalsArr.push(total);
    grandTotal += total;
  }
  console.log(hourlyTotalsArr);
}

// hourlyTotalsArr.push(grandTotal);
//creating a new objects for each store with their values for consturctor function
let seattle = new Stores('Seattle', 23, 65, 6.3);
let tokyo = new Stores('Tokyo', 3, 24, 1.2);
let dubai = new Stores('Dubai', 11, 38, 3.7);
let paris = new Stores('Paris', 20, 38, 2.3);
let lima = new Stores('Lima', 2, 16, 4.6);

//Invoking all fucntions needed for solution
renderHeader();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
renderFooter();

// Form functions
// Ger form from DOM
let salesForm = document.getElementById('sales-form');

//function for event submit trigger

function handleSubmit(event) {
  event.preventDefault();

  let city = event.target.city.value;
  let min = +event.target.min.value;
  let max = +event.target.max.value;
  let avg = +event.target.avg.value;

  console.log(city);
  console.log(min);
  console.log(max);
  console.log(avg);

  const newStore = new Stores(city, min, max, avg);

  newStore.getSales();
  newStore.render();
  hourlyTotalsArr = [];
  grandTotal = 0;
  tfoot.innerHTML = '';
  renderFooter();

}

//Add listener for for submit

salesForm.addEventListener('submit', handleSubmit);

//Const variable to render our new city

salesForm.reset();

