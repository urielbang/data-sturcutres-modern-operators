'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starteIndex, mainIndex) {
    return [this.starterMenu[starteIndex], this.mainMenu[mainIndex]];
  },

  //?function makin obj with param
  orderDelivery: function ({
    startIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `order resived ${[this.starterMenu[startIndex]]} and ${
        this.mainMenu[mainIndex]
      } will deliverd to ${address} at: ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
};
//! real world example
const arr = [7, 8, 9];

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'gnocci'];
console.log(newMenu);

//?copy array

const mainMenuCopy = [...restaurant.mainMenu];

//? join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//? Iterbales: array, string , maps , sets .NOT objects
const str = 'uriel';
const letters = [...str, '', 's'];

console.log(letters);

// const ingridient = [
//   prompt('lets make pasta! Ingredient 1?'),
//   prompt('lets make pasta! Ingredient 2?'),
//   prompt('lets make pasta! Ingredient 3?'),
// ];
// restaurant.orderPasta(...ingridient);

//! objects
const newRustaurant = { founding: 1998, ...restaurant, founder: 'Guisppe' };
console.log(newRustaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

//!destructing Objects
// restaurant.orderDelivery({
//   mainIndex: 2,
//   startIndex: 2,
//   address: 'Via sole 21',
//   time: '22:30',
// });
// restaurant.orderDelivery({
//   startIndex: 1,
//   address: 'Via sole 21',
// });

//? object to varibales
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//? chnge name of varivales
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);
//? default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//? mutating varibales
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

//?אובייקט מקונן
// const {
//   fri: { open: o, close: c },
// } = hours;
// console.log(o, c);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!destructing Arrays
// const arr = [2, 3, 4];
// const a = [0];
// const b = [1];
// const c = [2];
// const [x, y, z] = arr;

// console.log(x, y, z);

// let [main, , secendery] = restaurant.categories;
// console.log(main, secendery);

//?swith the varibales !
// const temp = main;
// main = secendery;
// secendery = temp;
// console.log(main, secendery);

// [main, secendery] = [secendery, main];

//? recive 2 return from function
// const [starter, mainCourse] = restaurant.order(2, 0);

//?nasted destructring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [i, , [j, k]] = nested;

//? default values
// const [p = 1, q = 1, r = 1] = [8, 9];
