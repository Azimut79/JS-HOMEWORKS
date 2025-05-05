//task1
// function propsCount(currentObject) {
//   return Object.keys(currentObject).length;
// }
// // Приклад використання
// let mentor = {
//   course: "JS fundamental",
//   duration: 3,
//   direction: "web-development",
// };
// console.log(propsCount(mentor)); // 3

//task2
// // Створюємо об'єкт з 5 полями
// let car = {
//   brand: "Toyota",
//   model: "Verso",
//   year: 2009,
//   color: "Silver",
//   engineVolume: 2.0,
// };
// // Функція для виведення властивостей об'єкта та їх значень
// function showProps(obj) {
//   // Отримуємо масив властивостей
//   let properties = Object.keys(obj);
//   // Отримуємо масив значень властивостей
//   let values = Object.values(obj);

//   console.log("Масив властивостей:", properties);
//   console.log("Масив значень:", values);
//   return {
//     properties: properties,
//     values: values,
//   };
// }
// // Викликаємо функцію і виводимо результат
// let result = showProps(car);

//task3
// // Створюємо базовий клас Person
// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
//   showFullName() {
//     return `${this.surname} ${this.name}`;
//   }
// }
// // Створюємо клас Student, який наслідується від Person
// class Student extends Person {
//   constructor(name, surname, year) {
//     super(name, surname); // Викликаємо конструктор батьківського класу
//     this.year = year;
//   }
//   // Перевизначаємо метод showFullName, щоб додати по-батькові
//   showFullName(midleName) {
//     return `${this.surname} ${this.name} ${midleName}`;
//   }
//   // Метод для визначення поточного курсу
//   showCourse() {
//     const currentYear = new Date().getFullYear(); // Поточний рік
//     const course = currentYear - this.year;
//     // Перевіряємо, чи курс є в межах від 1 до 6
//     if (course >= 1 && course <= 6) {
//       return course;
//     } else if (course < 1) {
//       return "Ще не розпочав навчання";
//     } else {
//       return "Закінчив навчання";
//     }
//   }
// }
// // Приклад використання
// const stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); // Current course: 10 (залежить від поточного року)

//task4
// class Worker {
//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//         this.#experience = 1.2;
//     }

//     // Приватне поле для зберігання досвіду
//     #experience;

//     // Показати зарплату без урахування досвіду
//     showSalary() {
//         const salary = this.dayRate * this.workingDays;
//         console.log(`${this.fullName} salary: ${salary}`);
//         return salary;
//     }

//     // Гетер для отримання значення досвіду
//     get showExp() {
//         return this.#experience;
//     }

//     // Сетер для встановлення значення досвіду
//     set setExp(value) {
//         this.#experience = value;
//     }

//     // Показати зарплату з урахуванням досвіду
//     showSalaryWithExperience() {
//         const salary = this.dayRate * this.workingDays * this.#experience;
//         console.log(`${this.fullName} salary: ${salary}`);
//         return salary;
//     }

//     // Статичний метод для сортування працівників за зарплатою
//     static sortSalaries(workers) {
//         // Створюємо масив об'єктів з іменами та зарплатами
//         const salaries = workers.map(worker => {
//             return {
//                 fullName: worker.fullName,
//                 salary: worker.showSalaryWithExperience()
//             };
//         });

//         // Сортуємо за зарплатою
//         salaries.sort((a, b) => a.salary - b.salary);

//         // Виводимо результат
//         console.log("Sorted salary:");
//         salaries.forEach(item => {
//             console.log(`${item.fullName}: ${item.salary}`);
//         });

//         return salaries;
//     }
// }

// // Створюємо працівників
// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();

// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName);
// worker2.showSalary();
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();

// let worker3 = new Worker("Andy Ander", 29, 23);
// console.log(worker3.fullName);
// worker3.showSalary();
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperience();
// worker3.setExp = 1.5;
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperience();

// // Сортуємо працівників за зарплатою
// Worker.sortSalaries([worker1, worker2, worker3]);

// task5
// class GeometricFigure {
//     getArea() {
//         return 0;
//     }
//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;
//     }
// }

// // Дочірній клас для трикутника
// class Triangle extends GeometricFigure {
//     constructor(base, height) {
//         super();
//         this.base = base;
//         this.height = height;
//     }

//     getArea() {
//         return 0.5 * this.base * this.height;
//     }
// }

// // Дочірній клас для квадрата
// class Square extends GeometricFigure {
//     constructor(side) {
//         super();
//         this.side = side;
//     }

//     getArea() {
//         return this.side * this.side;
//     }
// }

// // Дочірній клас для кола
// class Circle extends GeometricFigure {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }

//     getArea() {
//         return Math.PI * this.radius * this.radius;
//     }
// }

// // Зовнішня функція для обробки масиву фігур
// function handleFigures(figures) {
//     // Перевіряємо, чи всі об'єкти належать до класу GeometricFigure
//     if (!figures.every(figure => figure instanceof GeometricFigure)) {
//         throw new Error("Один або більше об'єктів не є екземпляром класу GeometricFigure");
//     }

//     // Обчислюємо загальну площу, використовуючи reduce
//     const totalArea = figures.reduce((total, figure) => {
//         // Виводимо інформацію про поточну фігуру
//         const area = figure.getArea();
//         console.log(`Geometric figure: ${figure.toString()} - area: ${area}`);

//         // Додаємо площу до загальної суми
//         return total + area;
//     }, 0);

//     console.log(totalArea); // Виводимо загальну площу
//     return totalArea;       // Повертаємо загальну площу
// }

// // Створюємо масив з екземплярами різних фігур
// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
// console.log(handleFigures(figures));
