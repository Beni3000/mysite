/*
alert("Hello from Javascript");
confirm("Согласны, узнали?");
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

/*let ans;
ans = prompt("Введите код операции");
if (ans == '6453') {
    alert("Молодец! Правильный ответ");
}else{
 alert("Код не верный! Не молодец");
}
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

/* Запросить 2 числа, и посчитать их среднее арифметическое */

/*
let x, y, S;
x = prompt("Введите число");
x = Number(x);
y = prompt("Введите число");
y = Number(y);
S = (x + y) / 2;
alert("Ваше среднее арифмитическое вашихчисел: " + S);
*/
/*
const mile = 0.621371;
let x = prompt ("Ввидите кол-во километров");
x = Number(x);
alert("Количество километров в милях: " + x * mile);
*/
/*
let input = prompt("Введите пятизначное число: ");
// ['1','2','3','4','5']
let last = input.slice(4);
let res = last + input.slice(0, 4);
alert("Ваше число теперь: " + res);
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

/*
et x = Number(prompt("ВВедите первое число: "));
   let y = Number(prompt("ВВедите второе число: "));
   let op = prompt("Введите тип операции (+, -, *, /)");
   let res = calc(x, y, op);
   alert("Результат вашей операции " + res); 
};
*/