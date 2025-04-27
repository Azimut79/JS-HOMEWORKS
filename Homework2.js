//task1
// let x = 1;
// let y = 2;

// let res1 = x + "" + y;
// console.log(res1);
// console.log(typeof res1);

// let res2 = (x < y) + "" + y;
// console.log(res2);
// console.log(typeof res2);

// let res3 = x < y;
// console.log(res3);
// console.log(typeof res3);

// let res4 = x / "hello";
// console.log(res4);
// console.log(typeof res4);

//task2
// let userInput = prompt("Введіть будь-яке число:");
// let number = Number(userInput); // Перетворюємо введене значення на число

// // Перевірка на парність та додатність
// if (number > 0 && number % 2 === 0) {
//   console.log("Число є парним і додатним.");
// } else {
//   console.log("Число НЕ є одночасно парним і додатним.");
// }

// // Перевірка на кратність 7
// if (number % 7 === 0) {
//   console.log("Число кратне 7.");
// } else {
//   console.log("Число НЕ кратне 7.");
// }

//task3
// // 1) Створення порожнього масиву
// let arr = [];

// // 2) Запис у перший елемент масиву будь-якого числа
// arr[0] = 13;

// // 3) Запис у другий елемент масиву будь-якого рядка
// arr[1] = "Hello, world!";

// // 4) Запис у третій елемент масиву будь-якого логічного значення
// arr[2] = true;

// // 5) Запис у четвертий елемент масиву значення null
// arr[3] = null;

// // 6) Виведення кількості елементів у масиві
// console.log("Кількість елементів у масиві:", arr.length);

// // 7) Запит значення у користувача для п’ятого елемента
// arr[4] = prompt("Введіть будь-яке значення для п'ятого елемента масиву:");

// // 8) Виведення п’ятого елемента
// console.log("П'ятий елемент масиву:", arr[4]);

// // 9) Видалення першого елемента масиву
// arr.shift();

// // 10) Виведення масиву після видалення першого елемента
// console.log("Масив після видалення першого елемента:", arr);

//task4
// let cities = ["Rome", "Lviv", "Warsaw"];
// let result = cities.join("*");
// console.log(result); // "Rome*Lviv*Warsaw"

//task5
// // Запитуємо користувача про його вік
// let age = prompt("Скільки вам років?");

// // Перетворюємо введені дані на число
// age = parseInt(age);

// // Перевіряємо, чи користувач досяг повнолітнього віку
// let isAdult = age >= 18;

// // Виводимо відповідне повідомлення в залежності від результату перевірки
// if (isAdult) {
//   alert("Ви досягли повнолітнього віку");
// } else {
//   alert("Ви ще надто молоді");
// }

//task6
// // Отримуємо довжини сторін трикутника від користувача
// const side1 = parseFloat(prompt("Введіть довжину першої сторони трикутника:"));
// const side2 = parseFloat(prompt("Введіть довжину другої сторони трикутника:"));
// const side3 = parseFloat(prompt("Введіть довжину третьої сторони трикутника:"));

// // Перевіряємо чи дані коректні
// if (
//   isNaN(side1) ||
//   isNaN(side2) ||
//   isNaN(side3) ||
//   side1 <= 0 ||
//   side2 <= 0 ||
//   side3 <= 0 ||
//   side1 + side2 <= side3 ||
//   side1 + side3 <= side2 ||
//   side2 + side3 <= side1
// ) {
//   console.log("Incorrect data");
// } else {
//   // a) Обчислюємо площу трикутника за формулою Герона
//   const semiPerimeter = (side1 + side2 + side3) / 2;
//   const area = Math.sqrt(
//     semiPerimeter *
//       (semiPerimeter - side1) *
//       (semiPerimeter - side2) *
//       (semiPerimeter - side3)
//   );

//   // Виводимо площу з точністю до 3 знаків після коми
//   console.log("Площа трикутника: " + area.toFixed(3));

//   // b) Перевіряємо чи трикутник прямокутний (теорема Піфагора)
//   // Спочатку визначаємо найдовшу сторону
//   let a, b, c;
//   if (side1 >= side2 && side1 >= side3) {
//     c = side1;
//     a = side2;
//     b = side3;
//   } else if (side2 >= side1 && side2 >= side3) {
//     c = side2;
//     a = side1;
//     b = side3;
//   } else {
//     c = side3;
//     a = side1;
//     b = side2;
//   }

//   // Перевіряємо теорему Піфагора з деякою похибкою для чисел з плаваючою точкою
//   const isPythagorean = Math.abs(a * a + b * b - c * c) < 0.0001;

//   if (isPythagorean) {
//     console.log("Цей трикутник є прямокутним");
//   } else {
//     console.log("Цей трикутник не є прямокутним");
//   }
// }

// task7
// // Спосіб 1: Використання оператора if-else
// function greetingWithIfElse() {
//   // Отримуємо поточний час із системи
//   const currentDate = new Date();
//   const currentHour = currentDate.getHours();

//   let greeting;

//   if (currentHour >= 23 || currentHour < 5) {
//     greeting = "Доброї ночі";
//   } else if (currentHour >= 5 && currentHour < 11) {
//     greeting = "Доброго ранку";
//   } else if (currentHour >= 11 && currentHour < 17) {
//     greeting = "Доброго дня";
//   } else if (currentHour >= 17 && currentHour < 23) {
//     greeting = "Доброго вечора";
//   }

//   console.log(greeting);
//   return greeting;
// }
// // Виклик функції для демонстрації
// console.log("Привітання з використанням if-else:");
// greetingWithIfElse();

// // Спосіб 2: Використання оператора switch
// function greetingWithSwitch() {
//   // Отримуємо поточний час із системи
//   const currentDate = new Date();
//   const currentHour = currentDate.getHours();

//   let greeting;

//   switch (true) {
//     case currentHour >= 23 || currentHour < 5:
//       greeting = "Доброї ночі";
//       break;
//     case currentHour >= 5 && currentHour < 11:
//       greeting = "Доброго ранку";
//       break;
//     case currentHour >= 11 && currentHour < 17:
//       greeting = "Доброго дня";
//       break;
//     case currentHour >= 17 && currentHour < 23:
//       greeting = "Доброго вечора";
//       break;
//   }

//   console.log(greeting);
//   return greeting;
// }
// // Виклик функції для демонстрації
// console.log("Привітання з використанням switch:");
// greetingWithSwitch();
