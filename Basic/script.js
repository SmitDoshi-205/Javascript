// console.log() --> prints in the console, can be used for debugging
// console.log("Hello World"); //Hello World
// console.log(2+3); //5
// console.log(20+"5"); //205 --> concatenation

// alert() --> used to display contents as a pop-up on screen
// alert("Hello");
// alert(2+3);

// variables in js
// let, var, const
// var is old technique
// let is block scoped and values of variables can be updated
// cosnt is block scoped but values of variables cannot be updated
// let age = 21;
// const x = "Smit";
// console.log(age, x);

// object
// const student = {
//     name : "Smit Doshi",
//     age : 21,
//     CGPA : 9.69,
//     isPass : true,
// };
// student.age = student.age+1;
// console.log(student.age);
// console.log(student);
// console.log(student["isPass"]);
// console.log(student.isPass);
// console.log(student.name);

// operators
// arithmetic operators --> +, -, *, /, %, **
// a = 5
// b = 2
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// console.log(++a, ++b, --a, --b);
// console.log(a++, b++, a--, b--);
// assignment operators --> =, +=, -=, *=, /=, %=, **=
// comparison operators --> ==, ===, !=, !==, >, <, >=, <=
// s1 = "10";
// s2 = 10;
// console.log(s1==s2); //true
// console.log(s1===s2); //false
// console.log(s1!=s2); //false
// console.log(s1!==s2); //true
// logical operators --> &&, ||, !

// for-in loop
// const student = {
//     name : "Smit Doshi",
//     age : 21,
//     CGPA : 9.69,
//     isPass : true,
// };
// for(let i in student) {
//     console.log("key:",i,"value:",student[i]);
// }
// let name = "Smit Doshi";
// let name1 = prompt("Enter name : ");
// console.log(`${name} wishes ${name1} good morning`);

// arrays
// const student = {
//     name : "Smit Doshi",
//     age : 21,
//     cgpa : 9.69,
//     isPass : true
// };
// console.log(arr);
// console.log(arr1);
// console.log(arr2);
// const data = {
//     name : ["Smit", "Jigar", "Drashti"],
//     age : [21, 50, 24],
//     cgpa : [9.5, 9.9, 9.8],
//     isPass : [true, true, true],
//     city : ["Mumbai", "Delhi", "Chennai"]
// };
// console.log(data);
// console.log(data.cgpa);
// console.log(data.cgpa.length);
// let arr = [10, 20, 30, 40];
// let arr1 = ["Smit", "Jigar", "Doshi"];
// let arr2 = ["Smit", 21, 9.69, true];
// arr.push(50); //add at end
// console.log(arr);
// arr1.pop(); //remove from end
// console.log(arr1);
// arr1.unshift("Smit"); //add in start
// console.log(arr1);
// arr2.shift(); //reove from start
// console.log(arr2);
// console.log(arr.concat(arr1));
// console.log(arr.slice(1, 3)); //slice(startIdx, endIdx) => prints from startIdx to endIdx-1
// let arr3 = [1, 2, 3, 4];
// .splice(startIdx, delCount, addElement,...)
// console.log(arr3.splice(1, 2));
// console.log(arr3);
// arr3.splice(0, 2, 40, 50);
// console.log(arr3);

//functions
// function function_name (param1, param2, ...) {
//     function body
// }
// function_name();  function calling
// function myFunction() {
//     console.log("hello");
// }
// myFunction();
// let name = prompt("enter name");
// function myFunction(name) {
//     console.log(`good morning ${name}`);
// }
// myFunction(name);
// function sum(x, y) {
//     return x+y;
// }
// let val = sum(5,8);
// console.log(val);
// arrow function
// const sum1 = (x, y) => {
//     return x+y;
// }
// let result = sum1(5,8);
// console.log(sum1(5,8));
// console.log(sum);
// console.log(sum1);
// x = prompt("enter sentence");
// count = 0;
// function vowelCount(x) {
//     for(i=0; i<x.length; i++) {
//         if(x[i] === 'a' || x[i] === 'e' || x[i] === 'i' || x[i] === 'o' || x[i] === 'u') {
//             count++;
//         }
//     }
//     console.log(`no of vowels in ${x} are ${count}`);
// }
// vowelCount(x);

// const vowelCount = (x) => {
//     for(i=0; i<x.length; i++) {
//         if(x[i] === 'a' || x[i] === 'e' || x[i] === 'i' || x[i] === 'o' || x[i] === 'u') {
//             count++;
//         }
//     }
//     console.log(`no of vowels in ${x} are ${count}`);
// }
// vowelCount(x);

// forEach loop
// arr.forEach(callBackFunction)
// forEach is a higher order functions or higher order methods
// these functions take a function as parameter or return a function
// arr = [1, 2, 3, 4];
// arr.forEach((val, idx, arr) => {
//     console.log(val**2, idx, arr);
// })

// map method
// creates a new array with the results of operation
// arr.map(callBackFunction(value, idx, arr)) {
// return ...
// }
// arr = [1, 2, 3, 4];
// let newArr = arr.map((val) => {
//     return val**2;
// })
// console.log(arr);
// console.log(newArr);

// filter method
// create a new array of elements that give true for a condition/filter
// arr.filter(callBackFunction(value, idx, arr)) {
// return ...
// }
// arr = [1, 2, 3, 4];
// let newArr = arr.filter((val) => {
//     return val%2 === 0
// })
// console.log(arr);
// console.log(newArr);

// reduce method
// performs some operations  and reduces the array to a single value and returns that single value
// arr.reduce((accumulator, currentValue) => {
//     // logic
//     return accumulator;
// }, initialValue);
// accumulator (acc) --> stores the result as it builds up
// currentValue (curr) --> current element in the array
// initialValue --> starting value (important)
// arr = [10, 20, 30, 40];
// let sum = arr.reduce((acc, curr) => {
//     return acc+curr;
// }, 0);
// console.log(sum);
// max in array
// let output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// })
// console.log(output);
// min in array
// let output1 = arr.reduce((prev, curr) => {
//     return prev < curr ? prev : curr;
// })
// console.log(output1);

// document object model (dom)
// selecting by id --> document.getElementById("idName");
// selecting by class --> document.getElementsByClassName("classnName");
// selecting by tag --> document.getElementsByTagName("tagName");
// document.getElementById("container").style.color = "red";
// getElementsByClassName returns a HTML Collection and not a single item
// const elements = document.getElementsByClassName("container");
// for (let i = 0; i < elements.length; i++) {
//     elements[i].style.fontSize = "18px";
//     elements[i].style.backgroundColor = "yellow";
// }
// getElementsByTagName returns a HTML Collection and not a single item
// const paragraphs = document.getElementsByTagName("div");
// for(let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].style.border = "2px solid black";
//     paragraphs[i].style.marginBottom = "10px";
//     paragraphs[i].style.padding = "10px";
// }

// query selector
// document.querySelector("idName/className/tagName");
// document.querySelectorAll("idName/className/tagName");
// document.querySelector("#container1 p").style.color = "purple";
// const paras = document.querySelectorAll("p");
// for(let i = 0; i < paragraphs.length; i++) {
//     paras[i].style.border = "2px solid blue";
// }

// tagName --> returns tags for element nodes
// innerText --> returns the text content of the element and all its children
// innerHTML --> returns the plain text or HTML contents in the element
// textContext --> returns textual content even for hidden elements

// attributes in DOM manipulation
// getAttribute(attr) --> to get the attribute value
// setAttribute(attr, vale) --> to set the attribute value
// let container = document.querySelector("#container");
// const data = container.getAttribute("data-value");
// container.innerText = data;

// container.setAttribute("data-value", "smit");
// const data = container.getAttribute("data-value");
// container.innerText = data;

// toggle between dark mode and light mode

// inserting and deleting elements
// let element = document.createElement("elementName");
// node.append(element); --> adds the element at the end of node (inside)
// node.prepend(element); --> adds the element at the start of node (inside)
// node.before(element); --> adds before the node (outside)
// node.after(element); --> adds after the node (outside)
// node.remove(); --> removes the node

// let container = document.querySelector("#container3");
// let element1 = document.createElement("div");
// let element2 = document.createElement("button");
// let element3 = document.createElement("div");
// let element4 = document.createElement("button");
// container.style.border = "4px solid black";
// element1.innerText = "Hello World (using append)";
// element2.innerText = "Button 2 (using prepend)";
// element3.innerText = "Hello World (using before)";
// element4.innerText = "Button 2 (using after)";
// container.append(element1);
// container.prepend(element2);
// container.before(element3);
// container.after(element4);
// element1.remove();
// element3.remove();

// Events
// the change in the state of an object is called as an event
// onclick = "eventToPerform" --> used to trigger an event on a certain action
// ondblclick = "eventToPerform" --> used for double click
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events --> DOM documentation

let isDark = false;
let isColor = false;
let container = document.querySelector("#container3");
let button = document.querySelector("#btn");

function renderUI() {
  document.body.style.backgroundColor = isDark ? "black" : "white";
  document.body.style.color = isDark ? "red" : "black";

  if (isColor) {
    container.style.backgroundColor = isDark ? "teal" : "aqua";
    container.style.color = isDark ? "white" : "green";
    container.style.border = "4px solid black";
  } else {
    container.style.backgroundColor = isDark ? "black" : "white";
    container.style.color = isDark ? "red" : "black";
    container.style.border = "none";
  }
}

function changeMode() {
  isDark = !isDark;
  renderUI();
}

button.addEventListener("click", () => {
  isColor = !isColor;
  renderUI();
});

// event object (e)
// it is a special object that has information about the event
// e.target --> displays the HTML target element for this event
// e.type --> displays the event performed
// e.clientX/clientY --> displays the mouse position
// e.key --> used for keyboard events
// let btn = document.querySelector("#trial-button");
// btn.addEventListener("click", (e) => {
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.clientX);
//     console.log(e.clientY);
//     console.log("Button pressed and e called!!");
//     e.target.innerText = "Pressed!";
// })

// reoveEventListener
// you can only remove a listener if you pass the same function reference

// function handleClick() {
//     console.log("Clicked!");
// }
// let btn = document.querySelector("button");
// btn.addEventListener("click", handleClick);
// later...
// btn.removeEventListener("click", handleClick);

// classes and objects
// objects with methods defined within themselves
// arrow functions do not use 'this' keyword
// const student = {
//     name : "Smit Doshi",
//     age : 21,
//     dept : "Computer Engineering",
//     cgpa : 7.5,
//     isPass : this.cgpa > 9.0 ? true : false,
//     show : () => {
//         console.log("name:",student.name);
//     },
//     calc() {
//         if(this.isPass) {
//             console.log("Student Pass");
//         }
//         else{
//             console.log("Student Failed");
//         }
//     },
//     eligible : function () {
//         if(this.age > 18) {
//             console.log("Student can vote");
//         }
//         else {
//             console.log("Student cannot vote");
//         }
//     }
// };

// const employee = {
//     calcTax() {
//         console.log("Tax will be GST 18%");
//     }
// };
// const smit = {
//     empid : "ABC011",
//     salary : 50000
// };
// to use the methods defiend in other objects, we create a prototype of that object in another objet
// object1.__proto__ = object2 => object2 is the object whose methods are to be used by object 1
// if the object and prototype have the same method, then the object method will be called
// smit.__proto__ = employee;

//classes and inheritence
// it is a program-code template for creating objects
// class Vehicle {
//     constructor(type) {
//         this.type = "two-wheeler";
//     }
//     display() {
//         console.log("A Vehicle");
//     }
// }
// class Bike extends Vehicle {
//     constructor(bikeCc) {
//         super(); //to invoke parent class constructor
//         this.bikeCc = bikeCc;
//     }
//     show() {
//         console.log("This is class BIKE");
//     }
// }
// let a = new Bike(1000);
// class Car {
//     constructor(model, year) {
//         this.model = model;
//         this.year = year;
//     }
//     showDetails() {
//         console.log("Brand : Toyota");
//         console.log("Model : ", this.model);
//         console.log("Year of Manufacturer : ", this.year);
//     }
// }
// let obj = new Car("Innova", 2020);
// let obj2 = new Car("Fortuner", 2021);
// let obj3 = new Car("Innova Hycross", 2024);

// asynchronization in javascript
// setTimeout(functionName, timeOut(2ms)) => allows to delay the execution of a function
// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("Hello");
// }, 4000); code below this continues execution and doesnot wait for the timeOut
// console.log("three");
// console.log("four");

// callbacks
// it is a function passed as an argument to another function
// function sum(a, b) {
//     console.log(a+b);
// }
// function calc(a, b) {
//     sum(a, b);  // callback
// }
// calc(2, 3, sum);
// OR
// calc(2, 3, () => {
//     console.log(a+b);
// });

// callback hell
// it is a condition when nested callbacks are stacked below one another making a pyramid of doom like structure
// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData) {
//             getNextData();
//         }
//     }, 3000);
// }
// getData(1, () => {
//     getData(2, () => {
//         getData(3);
//     });
// });
// to solve the problem of callback hell we can use promises

// promises
// it is for the 'eventual' completion of a task and is an object in JS
// it uses 2 promises (resolve and reject) which are callbacks provided by JS
// let promise = new Promise((resolve, reject) => {...})
// promise can have 3 states --> pending, fulfilled/resolved and rejected
// let promise = new Promise((resolve, reject) => {
//   console.log("Promise");
//   reject("error");
// });

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 3000);
//   });
// }
// to use the promise => .then() and .catch()
// promise.then((res) => {..}) => if resolve
// promise.catch((err) => {..}) => if reject
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Promise Sent!");
//         resolve("Success"); // promise successful
//         reject("Network Error"); //promise rejected
//     });
// };
// let promise = getPromise(); //invoking promise

// promise.then((res) => {
//     console.log("Promise Resolved", res);
// });

// promise.catch((err) => {
//     console.log("Promise Rejected", err);
// });

// promise chain
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fetching data 1...");
// let p1 = asyncFunc1();
// promise chain
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data 2...");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);
//     });
// });

// async-await
// async-await always returns a promise
// async function myFunc() {...}
// await pauses the execution of the surrounding async function until the promise is settled
// IMP : async-await >> promise-chain >> callback hell

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 3000);
//   });
// }

// async-await
// to prevent the unnecessary calling of the async function we can use IIFE (Immediately Invoked Function Expression)
// this IIFE is called immediately it is defined
// async function getDataInfo() {
//   await getData(123);
//   await getData(456);
//   await getData(789);
// }

// IIFE
// (async function getDataInfo() {
//   await getData(123);
//   await getData(456);
//   await getData(789);
// })();

// promise-chain
// getData(123)
//   .then((res) => {
//     return getData(456);
//   })
//   .then((res) => {
//     return getData(789);
//   });

// callback-hell => in the getData function we shall add another function to feature the callback 
// getData(123, () => {
//     getData(456, () => {
//         getData(789);
//     });
// });  

// fetch API => (Application Programming Interface)
// it provides an interface for fetching resources
// it uses the response and request objects
// fetch() method is used to fetch a resource(data)
// let promise = fetch(url, [options]);
// response status code = 500 => successful
// client side error = 400 => bad request
// page not found = 404 
// const url = "https://dogapi.dog/api/v2/facts";

// const getFacts = async () => {
//   let response = await fetch(url);
//   console.log(response);
//   let data = await response.json()
//   console.log(data);
// }