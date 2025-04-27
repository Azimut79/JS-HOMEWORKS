//task1
// // Функція для обчислення площі прямокутника
// function calcRectangleArea(width, height) {
//   // Перевірка, чи параметри є числами
//   if (typeof width !== "number" || isNaN(width)) {
//     throw new Error("Параметр width повинен бути числом");
//   }
//   if (typeof height !== "number" || isNaN(height)) {
//     throw new Error("Параметр height повинен бути числом");
//   }
//   // Додаткова перевірка на від'ємні значення
//   if (width <= 0) {
//     throw new Error("Ширина повинна бути додатнім числом");
//   }
//   if (height <= 0) {
//     throw new Error("Висота повинна бути додатнім числом");
//   }
//   // Обчислення та повернення площі
//   return width * height;
// }
// // Використання функції з обробкою винятків
// function calculateArea(width, height) {
//   try {
//     const area = calcRectangleArea(width, height);
//     console.log(`Площа прямокутника: ${area}`);
//     return area;
//   } catch (error) {
//     console.error(`Помилка: ${error.message}`);
//     return null;
//   }
// }
// // Приклади виклику функції
// console.log("Приклад 1 (правильні дані):");
// calculateArea(5, 10);
// console.log("\nПриклад 2 (неправильний тип даних):");
// calculateArea("5", 10);
// console.log("\nПриклад 3 (від'ємне значення):");
// calculateArea(5, -10);
// console.log("\nПриклад 4 (NaN):");
// calculateArea(5, NaN);

//task2
// function checkAge() {
//   try {
//     // Отримуємо значення від користувача
//     const age = prompt("Будь ласка, введіть свій вік:");
//     // Перевірка на порожню стрічку
//     if (age === "" || age === null) {
//       throw new Error("The field is empty! Please enter your age");
//     }
//     // Перетворюємо введене значення на число
//     const ageNum = Number(age);
//     // Перевірка чи введене значення є числом
//     if (isNaN(ageNum)) {
//       throw new Error("Please enter a numeric value for age");
//     }
//     // Перевірка чи вік більше або дорівнює 14
//     if (ageNum < 14) {
//       throw new Error("You must be at least 14 years old to watch this movie");
//     }
//     // Якщо всі перевірки пройдені успішно, надаємо доступ до фільму
//     alert("Access granted! Enjoy the movie!");
//     return true;
//   } catch (error) {
//     // Виводимо інформацію про помилку
//     alert(`Error: ${error.name}\nDescription: ${error.message}`);
//     return false;
//   }
// }
// // Виклик функції
// checkAge();

//task3
// // Створюємо клас MonthException
// class MonthException extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "MonthException";
//   }
// }
// // Функція, яка повертає назву місяця за його номером
// function showMonthName(month) {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   // Перевіряємо чи номер місяця є коректним (від 1 до 12)
//   if (month < 1 || month > 12 || isNaN(month)) {
//     throw new MonthException("Incorrect month number");
//   }
//   // Повертаємо назву місяця (масив починається з 0, тому віднімаємо 1)
//   return months[month - 1];
// }
// // Використання функції з обробкою винятків
// try {
//   console.log(showMonthName(5)); // Виведе "May"
//   // Цей виклик призведе до винятку
//   console.log(showMonthName(14));
// } catch (error) {
//   console.log(`${error.name} ${error.message}`);
// }
// // Інший приклад з обробкою винятку
// try {
//   console.log(showMonthName(7)); // Виведе "July"
// } catch (error) {
//   console.log(`${error.name} ${error.message}`);
// }
// // Ще один приклад з помилковим номером місяця
// try {
//   console.log(showMonthName(-2));
// } catch (error) {
//   console.log(`${error.name} ${error.message}`); // Виведе "MonthException Incorrect month number"
// }

//task4
// /**
//  * Функція, яка повертає об'єкт з id користувача
//  * @param {number} id - id користувача
//  * @returns {Object} - об'єкт з id користувача
//  * @throws {Error} - помилка, якщо id від'ємне
//  */
// function showUser(id) {
//   if (id < 0) {
//     throw new Error(`ID must not be negative: ${id}`);
//   }
//   return { id };
// }
// /**
//  * Функція, яка обробляє масив id і повертає масив об'єктів з коректними id
//  * @param {Array} ids - масив id користувачів
//  * @returns {Array} - масив об'єктів з коректними id
//  */
// function showUsers(ids) {
//   const result = [];
//   for (const id of ids) {
//     try {
//       // Намагаємось отримати об'єкт користувача
//       const user = showUser(id);
//       result.push(user);
//     } catch (error) {
//       // Якщо виникла помилка, виводимо її
//       console.log(error.message);
//     }
//   }
//   return result;
// }
// // Приклад використання
// const users = showUsers([7, -12, 44, 22]);
