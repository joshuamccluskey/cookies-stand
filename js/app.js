'use strict';

console.log('hello world');

// // Problem domain: Pat’s Salmon Cookies, soon with franchises internationally, needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:

// The minimum number of customers per hour.
// The maximum number of customers per hour.
// The average number of cookies purchased per customer.

//1. get element to modify


let hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm','6pm', '7pm']

// let section = document.getElementById('cookies-city-sales');

// console.log(section);

//Objects for each cities sales with min and max and average

let seattle = {
  min: 23,
  max: 65,
  avg: 6.3,
  sales: 0,
  getSales: function () {
    this.sales = getRandom(this.min, this.max);
    console.log(this.sales);
  }
};

let tokyo = {
  min: 3,
  max: 24,
  avg: 1.2,
};

let dubai = {
  min: 11,
  max: 38,
  avg: 2.3,
};

let paris = {
  min: 20,
  max: 38,
  avg: 2.3,
};

let lima = {
  min: 2,
  max: 16,
  avg: 4.6,
};

seattle.getSales();
tokyo.min;
dubai.min;
paris.min;
tokyo.min;
lima.min;
console.log(hours);


//Helper function to generate random  number

function getRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is exclusive and the minimum is inclusive
}


