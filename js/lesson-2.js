// // Задание 1. Почему код дает именно такие результаты?
var a = 1, b = 1, c,d;
c = ++a; alert(c); // 2
d = b++; alert(d); // 1
c = (2+ ++a); alert(c) // 5
d = (2+ b++); alert(d); // 4
alert(a); // 3
alert(b); // 3
//  Ответ:
// c = ++a - перед присваиванием "с" значения "а" происходит увеличение значения "а" на 1, поэтому "с" = 2
// d = b++ - здесь обратная ситуация, так как сначала присваивается исходное значение переменной "b", а только потом "b" увеличивается на 1
// c = (2+ ++a) - 2+ здесь - это суммирование числа 2 и переменной "а", увеличенной еще на 1, то есть "а" в этом примере уже равно "3"
// d = (2+ b++) - d = 4, так как b к этому моменту имеет значение "2", а только потом увеличивается еще на 1
// Итого: а и b к концу инструкции имеют одинаковые значения

// // Задание 2. Чему будет равен х в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
alert(x);
/* Ответ:
х = 5, так как *= - операция умножения, 1 + (2*2) = 5*/

// Задание 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
var a = parseInt(prompt("Введите первое число: "));
var b = parseInt(prompt("Введите второе число: "));

if (a > 0 && b > 0) {
	alert(a - b);
}

else if (a < 0 && b < 0) {
	alert(a * b);
}

else if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
	alert(a + b);
}

// Задание 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

var a = Math.round(Math.random () * 15 + 0);
switch (a) {
	case 1:
		alert(1);
	case 2:
		alert(2);
	case 3:
		alert(3);
	case 4:
		alert(4);
	case 5:
		alert(5);
	case 6:
		alert(6);
	case 7:
		alert(7);
	case 8:
		alert(8);
	case 9:
		alert(9);
	case 10:
		alert(10);
	case 11:
		alert(11);
	case 12:
		alert(12);
	case 13:
		alert(13);
	case 14:
		alert(14);
	case 15:
		alert(15);
}

// Задание 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function sum (x=0, y=0) {
	var a = x + y;
	return a;
}

function deduct (x=0, y=0) {
	var b = x - y;
	return b;
}

function multiply (x=0, y=0) {
	var c = x * y;
	return c;
}

function divide (x=0, y=0) {
	var d = x / y;
	if (y != 0) {
		return d;
	}
	else {
		alert("На 0 делить нельзя!");
	}
}

var a = 2 * sum (2,10);
alert(a);

var b = 10 * deduct (32,17);
alert(b);

var c = 4 * multiply (2,9);
alert(c);

var d = 7 * divide (42,21);
alert(d);

/* Задание 6.Реализовать функцию с тремя параметрами: 
function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3)
и вернуть полученное значение (использовать switch).*/

function mathOperation (x, y, operation) {
	switch (operation) {
		case "sum":
			return sum (2,5);
			break;
		case "deduct":
			return deduct (10,2);
			break;
		case "multiply":
			return multiply (10,5);
			break;
		case "divide":
			return divide (25,5);
			break;
		default:
			return NaN;
			break;		
	}
}