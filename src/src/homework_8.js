/*
1 задание
*/
/*
let ans;
ans = prompt("Укажите ваше имя:");
alert("Привет, его имя!- " + ans);
/*

/*
2 задание
*/
/*
const years = 2024;
let x = Number(prompt("Введите год рождения"));
alert("Ваш год рождения: " + (years - x));
*/

/*
3 задание
*/
/*
let a = Number(prompt("Введите сторону квадрата:"));
let square = a * 4;
alert("Площадь квадрата равна: " + square);
*/

/*
4 задание
*/
/*
let r = Number(prompt("Введите радиус круга:"));
let circle = Math.PI * r * r;
alert("Площадь круга равна: " + circle);
*/

/*
5 задание
*/
/*
let l = +prompt("Введите расстояние")
let time = +prompt("Введите время")
alert(l/time + "км/ч")
*/

/*
6 задание
*/
/*
const rate = Number(prompt("Введите текущий курс доллара по отношению к евро: "));
let dollar = Number(prompt("Введите количество долларов для обмена: "));
alert("По текущему курсу при обмене вы получите " + dollar * rate + " евро");
*/

/*
7 задание
*/
/*
const GB_MB = 1024;
let flash_drive = Number(prompt("Каков объем вашей флешки в Гб? "));
let size = Math.trunc(flash_drive * 1000 / GB_MB);
if (size < 0) {
  alert("Ваша флешка перезаполнена, освободите пространство");
}
else {
  alert("На флешку поместится " + size + " файлов объемом 820 Мб");
}
*/

/*
8 задание
*/
/*
let sum = Number(prompt("Cколько денег у вас есть? "));
let price = Number(prompt("почем одна шоколадка? "));
let sell = Math.trunc(sum / price);
let change = sum - price * sell;
if (sell < 1) {
  alert("Сегодня вы на нуле. приходите в другой раз");
}
else {
  alert("Получите свои " + sell + " шоколадки, а также сдачу " + (sum - price * sell) + " рублей ");
}
*/

/*
9 задание
*/
/*
nmb = prompt("Введите трехзначное число: ");
let a = Number(nmb % 10);
let b = Number((nmb - a) / 10 % 10);
let c = Number((nmb - a - b * 10) / 100);
alert("Перевертыш: " + (a * 100 + b * 10 + c));
*/

/*
10 задание
*/
/*
let a = Number(prompt("Введите число для проверки на четность: "));
alert((parseInt(a) % 2 == 0) ? "ЧЁТНОЕ" : "НЕЧЁТНОЕ");
*/