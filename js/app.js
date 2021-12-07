'use strict';

console.log('hello world');

// // Problem domain: Pat’s Salmon Cookies, soon with franchises internationally, needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:

// The minimum number of customers per hour.
// The maximum number of customers per hour.
// The average number of cookies purchased per customer.

//1. get element to modify


let section = document.getElementById('cookies-city-sales');

console.log(section);

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Objects for each cities sales with min and max and average

// Seattle Render function that adds the list items to the sales.html for the ul id:seattle.
function seattleRender() {

  let seattle = {
    city: 'seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    sales: 0,
    total: 0,

    getSales: function () {
      let randoNum = getRandom(this.min, this.max);
      let avgSales = randoNum * this.avg;
      let finalAvg = Math.ceil(avgSales);
      // console.log(this.sales);
      this.sales = finalAvg;
    }
  };

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    //The maximum is exclusive and the minimum is inclusive
  }
  let seattleList = document.getElementById(seattle.city);

  //Use for loop to iterate the hors add random sales multiplied by avg and added at each iteration to
  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    seattle.getSales();
    seattle.total = seattle.total + seattle.sales;
    li.textContent = `${hours[i]} ${seattle.sales}`;
    seattleList.appendChild(li);

  }

  let li = document.createElement('li');
  seattleList.appendChild(li);
  li.textContent = `Total: ${seattle.total}`;
  //Returning total to a seperate array
  return [seattle.total];

}

seattleRender();

// Tokyo Render function that adds the list items to the sales.html for the ul id:tokoyo.

function tokyoRender() {

  let tokyo = {
    city: 'tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    sales: 0,
    total: 0,


    getSales: function () {
      let randoNum = getRandom(this.min, this.max);
      let avgSales = randoNum * this.avg;
      let finalAvg = Math.ceil(avgSales);
      // console.log(this.sales);
      this.sales = finalAvg;
    }
  };

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    //The maximum is exclusive and the minimum is inclusive
  }
  let tokyoList = document.getElementById(tokyo.city);
  //Use for loop to iterate the hors add random sales multiplied by avg and added at each iteration to
  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    tokyo.getSales();
    tokyo.total = tokyo.total + tokyo.sales;
    li.textContent = `${hours[i]} ${tokyo.sales}`;
    tokyoList.appendChild(li);

  }

  let li = document.createElement('li');
  tokyoList.appendChild(li);
  li.textContent = `Total: ${tokyo.total}`;
  //Returning total to a serperate array
  return [tokyo.total];
}

tokyoRender();


// Dubai Render function that adds the list items to the sales.html for the ul id:dubai.
function dubaiRender() {

  let dubai = {
    city: 'dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    sales: 0,
    total: 0,

    getSales: function () {
      let randoNum = getRandom(this.min, this.max);
      let avgSales = randoNum * this.avg;
      let finalAvg = Math.ceil(avgSales);
      // console.log(this.sales);
      this.sales = finalAvg;
    }
  };

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    //The maximum is exclusive and the minimum is inclusive
  }
  let dubaiList = document.getElementById(dubai.city);
  //Use for loop to iterate the hors add random sales multiplied by avg and added at each iteration to
  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    dubai.getSales();
    dubai.total = dubai.total + dubai.sales;
    li.textContent = `${hours[i]} ${dubai.sales}`;
    dubaiList.appendChild(li);

  }

  let li = document.createElement('li');
  dubaiList.appendChild(li);
  li.textContent = `Total: ${dubai.total}`;
  //Returning total to a seperate array
  return [dubai.total];

}

dubaiRender();

// Paris Render function that adds the list items to the sales.html for the ul id:paris.
function parisRender() {

  let paris = {
    city: 'paris',
    min: 20,
    max: 38,
    avg: 2.3,
    sales: 0,
    total: 0,

    getSales: function () {
      let randoNum = getRandom(this.min, this.max);
      let avgSales = randoNum * this.avg;
      let finalAvg = Math.ceil(avgSales);
      // console.log(this.sales);
      this.sales = finalAvg;
    }
  };

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    //The maximum is exclusive and the minimum is inclusive
  }
  let parisList = document.getElementById(paris.city);
  //Use for loop to iterate the hors add random sales multiplied by avg and added at each iteration to
  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    paris.getSales();
    paris.total = paris.total + paris.sales;
    li.textContent = `${hours[i]} ${paris.sales}`;
    parisList.appendChild(li);

  }

  let li = document.createElement('li');
  parisList.appendChild(li);
  li.textContent = `Total: ${paris.total}`;
  //Returning total to a seperate array
  return [paris.total];
}

parisRender();


// Paris Render function that adds the list items to the sales.html for the ul id:paris.
function limaRender() {

  let lima = {
    city: 'lima',
    min: 2,
    max: 16,
    avg: 4.6,
    sales: 0,
    total: 0,

    getSales: function () {
      let randoNum = getRandom(this.min, this.max);
      let avgSales = randoNum * this.avg;
      let finalAvg = Math.ceil(avgSales);
      // console.log(this.sales);
      this.sales = finalAvg;
    }
  };

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    //The maximum is exclusive and the minimum is inclusive
  }
  let limaList = document.getElementById(lima.city);
  //Use for loop to iterate the hors add random sales multiplied by avg and added at each iteration to
  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    lima.getSales();
    lima.total = lima.total + lima.sales;
    li.textContent = `${hours[i]} ${lima.sales}`;
    limaList.appendChild(li);

  }

  let li = document.createElement('li');
  limaList.appendChild(li);
  li.textContent = `Total: ${lima.total}`;
  //Returning total to a seperate array
  return [lima.total];
}

limaRender();


