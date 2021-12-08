'use strict';

console.log('hello world');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Stores(city, min, max, avg) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.sales = 0;
  this.total = 0;

}
Stores.prototype.getSales = function () {
  let randoNum = getRandom(this.min, this.max);
  let avgSales = randoNum * this.avg;
  let finalAvg = Math.ceil(avgSales);
  // console.log(this.sales);
  this.sales = finalAvg;
  return [];
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is exclusive and the minimum is inclusive
}

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
  th.textContent = 'Daily location totals';
  tr.appendChild(th);

}


let seattle = new Stores('Seattle', 23, 65, 6.3);
let tokyo = new Stores('Tokyo', 3, 24, 1.2);
let dubai = new Stores('Dubai', 11, 38, 3.7);
let paris = new Stores('Paris', 20, 38, 2.3);
let lima = new Stores('Lima', 2, 16, 4.6);

renderHeader();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


// seattle.render();

// Seattle Render function that adds the list items to the sales.html for the ul id:seattle.
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

