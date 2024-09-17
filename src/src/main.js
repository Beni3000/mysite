/*
console. log("Hello from Javascript");
*/
/*
alert("Hello from Javascript");
confirm("Согласны, узнали?");
*/
/*
uddefined - неинициализированные значения
null - флаг отсутствия значений (либо нуливое значение)
bool (Boolean) - логический тип данных, true или false
string - последовательность символов (или символ), объединеные в структуру
number - число (любого вида), NaN (Not-a-Number), Infinity (-Infinity), +0 (-0)
object - переставление объекта языка JavaScript

Декремент:
++x или x++ <=> x+1

Инкремент:
--x или X-- <=> x-1
*/
/*
alert("Укажите ваше имя:");
let ans;
ans = prompt();
alert("Ваше имя - " + ans);
*/

/*
let ans;
ans = prompt("Укажите ваше имя:");
alert("Ваше имя - " + ans);
*/   

/*
let ans;
ans = prompt("Введите код операции");
if (ans == '6453') {
    alert("Молодец! Правильный ответ");
}else{
 alert("Код не верный! Не молодец");
}
*/

/*
if (condition){
    statement;
}
else{
    other statement;
}

*/

/*
let x;
x = prompt("Введите число");
Number(x);
alert("Ваше число в квадрате: " + x ** 2);
*/


/* Запросить 2 числа, и посчитать их среднее арифметическое */

/*
let x;
x = prompt("Введите первое число");
let y;
y = prompt("Введите второе число");
x = Number(x);
y = Number(y);
let S;
S = (x + y) / 2;
alert("Ваше среднее арифметическое вашихчисел: " + S);
*/

/*
let x, y, S;
x = prompt("Введите число");
x = Number(x);
y = prompt("Введите число");
y = Number(y);
S = (x + y) / 2;
alert("Ваше среднее арифметическое вашихчисел: " + S);
*/

/*
const mile = 0.621371;
let x = prompt("Введите кол-во километров");
x = Number(x);
alert("Количество километров в милях: " + x * mile);
*/

/*
const mile = 0.621371;
let x = Number(prompt("Введите кол-во километров"));
alert("Количество километров в милях: " + x * mile);
*/

/*
let input = prompt("Введите пятизначное число: ");
//   0   1   2   3   4
// ['1','2','3','4','5']
let last = input.slice(4);
let res = last + input.slice(0, 4);
alert("Ваше число теперь: " + res);
*/

/*
let x = Number (prompt("Введите первое число: "));
let y = Number (prompt("Введите второе число: "));
alert("сумма: " + (x + y));
alert("Разница: " + (x - y));
alert("произведение: " + (x * y));
alert("Деление: " + (x / y));
*/

/* 12.09
window. onload = function () {
    function foo() {
        let x = Number(prompt("Введите число x: "));
        let a;
        a = prompt("Введите число a: ");
        a = Number(a);
        const k = 3.141592;
        let y = k * x + a * x ** 2;
        alert("Результат выполнения функции равен "+ y);
    }
    foo();
};
*/

/*
function calc(a, b, operation){
    if (operation == "+"){
      return a + b;
    }
    else if (operation == "-"){
      return a - b;
    }
    else if (operation == "*"){
      return a * b;
    }
    else if (operation == "/"){

      if (b == 0){
         return "Делить на ноль нельзя!";
     }else {
      return a / b;
      }
    } 
    else {
       return "Неизвесная операция. Попробуй еще раз";
    }  
}
*/
/*
function calcPaS() {
    let x = Number(document.getElementById("num1").value);
    let y = Number(document.getElementById("num2").value);
    let op = document.getElementById("operation").value;
    console.log(x, y, op);
    let res = calc(x, y, op);
    alert("Результат операции: " + res);
}

window.onload = () => {
   let buttonCalc = document.getElementById("calculator");
   buttonCalc.addEventListener("click", calcPaS);
};
*/
/*
et x = Number(prompt("ВВедите первое число: "));
   let y = Number(prompt("ВВедите второе число: "));
   let op = prompt("Введите тип операции (+, -, *, /)");
   let res = calc(x, y, op);
   alert("Результат вашей операции " + res); 
};
*/

/*
17.09.
*/
/*
let user = new Object();
let user = {};
*/

/*
let user = {
  name: "Dmitrii",
  age: 27,
}

console.log(user.name);
console.log(user ["age"]);

user.isAdmin = true
delete user.age

console.log(user);
*/

/*
let fruit = prompt("Введите свой любимый фрукт");

let user = {
  name: "Dmitrii",
  surname: "Ver",
  age: 41,
  height: 175,
  city: "Spb",
  alert: true,
  [fruit]: "favouritte",
}

console.log(user.name);
console.log(user ["age"]);

user.isAdmin = true
delete user.age

console.log(user);
*/

/*
let rectangle = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
}

function set_rectangle(o) {
  A = prompt ("Введите координаты первой точки (через запятую):");
  o.A = A;
  B = prompt ("Введите координаты первой точки (через запятую):");
  o.B = B;
  C = prompt ("Введите координаты первой точки (через запятую):");
  o.C = C;
  D = prompt ("Введите координаты первой точки (через запятую):");
  o.D = D;
}

function rectangleInfo(o) {
  alert(
    `Точка A: (${o.A})\nТочка B: (${o.B})\nТочка C: (${o.C})\nТочка D: (${o.D})`

  );
}

*/
let rectangle = {
  a: null,
  b: null,
  c: null,
  d: null,
}

function set_rectangle(o) {
  A = prompt ("Введите координаты первой точки (через запятую):");
  o.A = A;
  B = prompt ("Введите координаты первой точки (через запятую):");
  o.B = B;
  C = prompt ("Введите координаты первой точки (через запятую):");
  o.C = C;
  D = prompt ("Введите координаты первой точки (через запятую):");
  o.D = D;
}

function rectangleInfo(o) {
  alert(
    `Точка A: (${o.A})\nТочка B: (${o.B})\nТочка C: (${o.C})\nТочка D: (${o.D})`

  );
}

function getWidth(o) {
  alert(`Ширена прямоугольника: ${Number(o.B[o]) - Number (o.A[o])}`);
}
