const hour = 10;
if (hour > 8) {
    console.log("Get up");
  } else {
    console.log("Go back to sleep");
}


const hasFinishedHomework = false;

if (hasFinishedHomework === false) {
  console.log("Keep studying");
}else{
    console.log("Play videogames");
}


const cartValue = 50;
const deliveryCost = 9.99;
let total = cartValue;

if(cartValue < 40){
    total = total + deliveryCost
}
console.log(`The total amount is: ${total}€`);


const n = 9;

if (n % 3 === 0) {
    console.log(`${n} is divisible by 3`);
} else {
    console.log(`${n} is not divisible by 3`);
}



//______________________________________________________


const username = "John";
if(!username){
    console.log("Hello , guest!");
}else{
    console.log(`Welcome back , ${username}`);
}

const person1Name = "John";
const person1Age = 31;
const person2Name = "Jim";
const person2Age = 17;

if(person1Age < person2Age){
    console.log(person1Name);
}else{
    console.log(person2Name);
}


let mode ="light";
let backgroundColor;
let textColor;

if(mode == "dark"){
    backgroundColor="black";
    textColor="white"
    console.log(`Current mode : ${mode}`);
}else if(mode == "light"){
    backgroundColor="white";
    textColor="black"
    console.log(`Current mode : ${mode}`);
}else{
    console.log("mode is not valid");
}

const isMilkAvailable = "false";
const isBreadAvailable = "true";
const isAppleAvailable = "true";

if(isBreadAvailable){
    console.log("eat a sandwich");
}else if(isMilkAvailable){
    console.log("Some milk with cereals will be ok");
}else if(isAppleAvailable){
    console.log("Ok, i guess I´ll just eat an apple");
}else{
    console.log("I´ll have breaksfast outside!");
}
const n2 = 17;
if(n % 2 === 0){
    console.log(`${n2} is a even number`);
}else{
    console.log(`${n2} is a odd number`);
}

const x = 2;
const y = 5;

if(x>y){
    console.log(`${x} is greater than ${y}`);
}else if(y>x){
    console.log(`${y} is greater than ${x}`);
}else{
    console.log(`${x} and ${y} are equal`);
}


const password = "123IloveCat"

if(password.length > 8 && password.charAt(0)!==password.slice(-1)&&password!=="12345678"&&password.charAt(0)!==" "&&password.slice(-1)!=="!"){
    console.log(`Is the password ${password} valid? true`);
}else{
    console.log(`Is the password ${password} valid? false`);
}


let sales = 0;

if (sales >= 70 && sales <= 99) {
  console.log("Sales are: " + sales + ". Are they between 70 and 99?", true);
} else {
  console.log("Sales are: " + sales + ". Are they between 70 and 99?", false);
}

let sciFiDepartmentSales = 0;
let crimeDepartmentSales = 0;
let comicBookDepartmentSales = 0;

if ((sciFiDepartmentSales >= 200 && sciFiDepartmentSales <= 500)||(crimeDepartmentSales >= 200 && crimeDepartmentSales <= 500)||(comicBookDepartmentSales >= 200 && comicBookDepartmentSales <= 500)) {
  console.log("Did at least one department between Sci-Fi,Comic and Crime sell between 200 and 500 books?", true);
} else {
  console.log("Did at least one department between Sci-Fi,Comic and Crime sell between 200 and 500 books?", false);
}

let cookingDepartmentSales = 0;
let drawingDepartmentSales = 0;

if (cookingDepartmentSales>=300 && drawingDepartmentSales>=300) {
    console.log("Did Cooking and Drawing sell more than 300 books?", true);
  } else {
    console.log("Did Cooking and Drawing sell more than 300 books?", false);
  }

const cookingDepartmentSales1 = 400;
const drawingDepartmentSales1 = 500;

if(cookingDepartmentSales1>drawingDepartmentSales1){
    console.log("cookingDepartmentSales with "+cookingDepartmentSales1);
}else{
    console.log("drawingDeprtmentSales with "+drawingDepartmentSales1);
}

const sciFi = 700;
const crime = 170;
const comic = 340;

if(sciFi > crime){
    if(sciFi>comic){
        console.log("sciFi selled the most with "+sciFi);
    }else{
        console.log("comic selled the most with "+comic);
    }
}else if(crime > sciFi){
    if(crime > comic){
        console.log("crime selled the most with "+crime);
    }else{
        console.log("comic selled the most with "+comic);
    }
}


let sciFi1 = 700;
let crime1 = 170;
let comic1 = 340;

let totalSalesLastYear = 2000;
let totalSalesGoal = 3000;

let total1 = sciFi1 + crime1 + comic1;

if(total < totalSalesLastYear){
    console.log(":-(");
}else if(total>totalSalesLastYear&&total<totalSalesGoal){
    console.log(":-)");
}else if(total>totalSalesGoal){
    console.log(":-D");
}

let day = "Monday";
let bookPrice = 16;

if(day == "Saturday" || day == "Sunday"){
    bookPrice = bookPrice / 2;
}
console.log("Today is "+day+" and the bookprice is "+bookPrice);

//______________________________________

const isMarried ="true";
let message="";

if(isMarried){
    message="John is happily married"
}else{
    message="John is not married"
}

const discount = 20;
const cartTotal = 50;
const amountToPay = cartTotal - discount;
if (amountToPay<0){
    amountToPay= 0;
}
console.log(`With an amount to pay of ${cartTotal}$ and a discount of ${discount}$ , the output would be ${amountToPay}$`);

const itsRaining = true;
if(itsRaining){
    console.log("stay at home");
}else{
    console.log("Go out");
}

//____________________________________

let hour1 = 9;
let action = (hour1 >= 9) ? "It's late, wake up!" : "Go back to bed";

console.log(action);


let cartTotal1 = 50;
let shippingCosts = cartTotal1 >= 50 ?  0 :  9.99;

console.log(
  `With a cart of ${cartTotal1}€ the shipping costs amount to ${shippingCosts}€`
);

let day2 = "Sunday";
let mood = day2 === "Saturday" || day2 === "Sunday" ? "YAY!, it's the weekend" : "work :(";

console.log(mood);


let isBackEndDeveloper = false;
let isFrontEndDeveloper = true;

let isFullStackDeveloper = isBackEndDeveloper && isFrontEndDeveloper;

console.log(
  `Gina ${isFullStackDeveloper ? "is" : "is not"} a full-stack developer`
);


let isEmailCorrect = true;
let isPasswordCorrect = true;

let message2 = isEmailCorrect && isPasswordCorrect
    ? "You logged in successfully!"
    : "The email or the password you typed were not correct. Try again.";

console.log(message2);


let isLoggedIn = false;

let message3 = !isLoggedIn ? "Please login before proceeding." : "Welcome!";

console.log(message3);