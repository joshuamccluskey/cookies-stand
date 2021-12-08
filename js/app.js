'use strict';

//Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.

// Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

// Replace the lists of your data for each store and build a single table of data instead. It should look similar to the following:

// Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.



//Hours array for the column heads
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Contructor function for collecting store information
function Stores(city, min, max, avg) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.sales = 0;
  this.total = 0;

}

//Method for getting a a random number multiplied by average for each hour for each store returns to an empty array and propert this.total.

Stores.prototype.getSales = function () {
  let randoNum = getRandom(this.min, this.max);
  let avgSales = randoNum * this.avg;
  let finalAvg = Math.ceil(avgSales);
  // console.log(this.sales);
  this.sales = finalAvg;
  return [];
};

// Random number generator functino used in getSales method
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is exclusive and the minimum is inclusive
}

//Render table into webpage and also calculates the totals for each store location.
Stores.prototype.render = function () {
  let table = document.getElementById('cookieSales');
  let tr = document.createElement('tr');
  table.appendChild(tr);
  let td = document.createElement('td');
  td.textContent = this.city;
  tr.appendChild(td);
  // let tf = document.createElement('tf');

  for (let i = 0; i < hours.length; i++) {
    this.getSales();
    this.total = this.total + this.sales;
    td = document.createElement('td');
    td.textContent = `${this.sales}`;
    tr.appendChild(td);
  }

  td = document.createElement('td');
  td.textContent = this.total;
  tr.appendChild(td);
};

//Renders the header inforamtion with the hours array to
function renderHeader() {
  let table = document.getElementById('cookieSales');
  let tr = document.createElement('tr');
  table.appendChild(tr);
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

function renderFooter() {
  let table = document.getElementById('cookieSales');
  let tr = document.createElement('tr');
  table.appendChild(tr);
  let tfoot = document.createElement('tfoot');
  tr.appendChild(tfoot);
  let td = document.createElement('td');
  td.textContent = 'Totals';
  tfoot.appendChild(td);

}

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


//For refernce of the vales for each store
// function seattleRender() {

//   let seattle = {
//     city: 'Seattle',
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     sales: 0,
//     total: 0,


//   let tokyo = {
//     city: 'tokyo',
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     sales: 0,
//     total: 0,

//   let dubai = {
//     city: 'dubai',
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     sales: 0,
//     total: 0,

//   let paris = {
//     city: 'paris',
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     sales: 0,
//     total: 0,

//   let lima = {
//     city: 'lima',
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     sales: 0,
//     total: 0,
