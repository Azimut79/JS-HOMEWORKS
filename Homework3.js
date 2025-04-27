//task1
// // Варіант з циклом for
// // Визначаємо масив безпосередньо в коді
// const numbers = [2, 3, 4, 5];
// // Знаходження добутку елементів масиву за допомогою циклу for
// let productFor = 1;
// for (let i = 0; i < numbers.length; i++) {
//   productFor = productFor * numbers[i];
// }
// console.log("Добуток елементів масиву (цикл for):", productFor);

// // Варіант з циклом while
// // Знову визначаємо масив для уникнення можливих проблем
// const numbersForWhile = [2, 3, 4, 5];
// // Знаходження добутку елементів масиву за допомогою циклу while
// let productWhile = 1;
// let j = 0;
// while (j < numbersForWhile.length) {
//   productWhile = productWhile * numbersForWhile[j];
//   j++;
// }
// console.log("Добуток елементів масиву (цикл while):", productWhile);

//task2
// // Цикл від 0 до 15
// for (let i = 0; i <= 15; i++) {
//   // Перевіряємо, чи є число парним
//   if (i % 2 === 0) {
//     console.log(i + " is even");
//   } else {
//     console.log(i + " is odd");
//   }
// }

//task3
// function randArray(k) {
//   // Створюємо порожній масив для результату
//   const result = [];
//   // Заповнюємо масив випадковими числами
//   for (let i = 0; i < k; i++) {
//     // Генеруємо випадкове число від 1 до 500
//     const randomNumber = Math.floor(Math.random() * 500) + 1;
//     // Додаємо число до масиву
//     result.push(randomNumber);
//   }
//   return result;
// }
// // Приклад використання
// console.log(randArray(5)); // Виведе щось на зразок [399,310,232,379,40]

//task4
// function raiseToDegree(a, b) {
//   if (!Number.isInteger(a) || !Number.isInteger(b)) {
//     return "Помилка: Обидва аргументи повинні бути цілими числами.";
//   }
//   return Math.pow(a, b);
// }

// // Реалізація введення чисел з використанням prompt()
// let numAStr = prompt("Введіть ціле число a:");
// let numBStr = prompt("Введіть ціле число b (степінь):");

// if (numAStr !== null && numBStr !== null) {
//   let numA = parseInt(numAStr);
//   let numB = parseInt(numBStr);

//   if (
//     !isNaN(numA) &&
//     Number.isInteger(numA) &&
//     !isNaN(numB) &&
//     Number.isInteger(numB)
//   ) {
//     let result = raiseToDegree(numA, numB);
//     console.log(`Результат піднесення ${numA} до степеня ${numB}: ${result}`);
//   } else {
//     console.error("Помилка: Будь ласка, введіть цілі числа.");
//   }
// } else {
//   console.log("Введення скасовано.");
// }

//task5
// function findMin() {
//   if (arguments.length === 0) {
//     return undefined; // Або можна викинути помилку, якщо відсутні аргументи
//   }
//   let min = arguments[0]; // Припускаємо, що перший аргумент - мінімальний

//   for (let i = 1; i < arguments.length; i++) {
//     if (arguments[i] < min) {
//       min = arguments[i];
//     }
//   }
//   return min;
// }
// // Приклад використання:
// console.log(findMin(12, 14, 4, -4, 0.2)); // => -4
// console.log(findMin(5, 3, 8, 1)); // => 1
// console.log(findMin(-10, -5, -20)); // => -20
// console.log(findMin()); // => undefined

//task6
// function findUnique(arr) {
//   return new Set(arr).size === arr.length;
// }
// // Приклад використання:
// console.log(findUnique([1, 2, 3, 5, 3])); // => false
// console.log(findUnique([1, 2, 3, 5, 11])); // => true
// console.log(findUnique([1, 1, 1])); // => false
// console.log(findUnique([])); // => true (порожній масив вважається унікальним)
// console.log(findUnique([null, null])); // => false
// console.log(findUnique([undefined, undefined])); // => false
// console.log(findUnique([NaN, NaN])); // => false (NaN вважається рівним сам собі в Set)
// console.log(findUnique([{}, {}])); // => false (об'єкти порівнюються за посиланням)
// console.log(findUnique(["a", "b", "a"])); // => false

//task7
// function lastElem(arr, count) {
//   if (!Array.isArray(arr)) {
//     return "Помилка: Перший аргумент має бути масивом.";
//   }

//   if (count === undefined) {
//     if (arr.length === 0) {
//       return undefined;
//     }
//     return arr[arr.length - 1];
//   }

//   if (!Number.isInteger(count) || count <= 0) {
//     return "Помилка: Другий аргумент має бути цілим числом більшим за 0.";
//   }

//   if (count > arr.length) {
//     return arr.slice(); // Повертаємо копію всього масиву
//   }

//   return arr.slice(-count);
// }

// // Приклади використання:
// console.log(lastElem([3, 4, 10, -5])); // -5
// console.log(lastElem([3, 4, 10, -5], 2)); // [10, -5]
// console.log(lastElem([3, 4, 10, -5], 8)); // [3, 4, 10, -5]
// console.log(lastElem([1, 2, 3], 1)); // 3
// console.log(lastElem([1, 2, 3], 0)); // Помилка: Другий аргумент має бути цілим числом більшим за 0.
// console.log(lastElem([1, 2, 3], -2)); // Помилка: Другий аргумент має бути цілим числом більшим за 0.
// console.log(lastElem([], 1)); // undefined (якщо запитуємо елемент з порожнього масиву)
// console.log(lastElem("не масив")); // Помилка: Перший аргумент має бути масивом.

//task8
// function capitalizeFirstLetterOfEachWord(str) {
//     if (typeof str !== 'string') {
//       return "Помилка: Вхідний параметр повинен бути рядком.";
//     }

//     return str.split(' ')
//               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//               .join(' ');
//   }

//   // Приклад використання:
//   const inputString = 'i love java script';
//   const outputString = capitalizeFirstLetterOfEachWord(inputString);
//   console.log(`Input string: '${inputString}'`);
//   console.log(`Output string: '${outputString}'`);

//   const anotherString = 'the quick brown fox';
//   console.log(capitalizeFirstLetterOfEachWord(anotherString)); // => 'The Quick Brown Fox'

//   const emptyString = '';
//   console.log(capitalizeFirstLetterOfEachWord(emptyString)); // => ''

//   const stringWithLeadingAndTrailingSpaces = '  hello world  ';
//   console.log(capitalizeFirstLetterOfEachWord(stringWithLeadingAndTrailingSpaces)); // => '  Hello World  '
