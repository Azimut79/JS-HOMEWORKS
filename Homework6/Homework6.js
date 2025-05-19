// task1

// // Спосіб 1: Використання getElementById
// document.getElementById("test").innerHTML = "Last";

// // Спосіб 2: Використання querySelector
// document.querySelector("#test").textContent = "Last";

//task2
// // Знаходимо елемент зображення за класом
// const img = document.querySelector(".image");
// // Змінюємо шлях до зображення
// img.src = "cat.jpg";
// // Виводимо повний HTML тега <img> у модальному вікні
// alert(img.outerHTML);

// task3
// // Отримуємо всі <p> елементи всередині div#text
// const paragraphs = document.querySelectorAll("#text p");
// // Проходимося по них і виводимо вміст з індексом
// paragraphs.forEach((p, index) => {
//   console.log(`Selector text ${index}: ${p.textContent}`);
// });

// task4
// // Спосіб 1: Через querySelectorAll (отримуємо масив-like колекцію)
// const items = document.querySelectorAll("#list li");
// // Формуємо результат у потрібному порядку
// const output = [
//   items[0].textContent, // перший
//   items[4].textContent, // останній
//   items[1].textContent, // другий
//   items[3].textContent, // четвертий
//   items[2].textContent, // третій
// ];
// // Виводимо через alert
// alert(output.join(", "));

// // Спосіб 2: Через властивості firstElementChild, lastElementChild, children
// const list = document.getElementById("list");
// // Доступ до елементів через DOM-властивості
// const first  = list.firstElementChild;
// const last   = list.lastElementChild;
// const second = list.children[1];
// const fourth = list.children[3];
// const third  = list.children[2];
// // Виводимо результат
// alert(`${first.textContent}, ${last.textContent}, ${second.textContent}, ${fourth.textContent}, ${third.textContent}`);

// task5
// // Стилізуємо <h1>
// const header = document.querySelector("h1");
// header.style.backgroundColor = "lightgreen";
// header.style.fontSize = "32px";
// header.style.fontWeight = "bold";
// header.style.color = "black";
// // Абзаци в #myDiv
// const paragraphs = document.querySelectorAll("#myDiv p");
// paragraphs[0].style.fontWeight = "bold"; // перший - жирний
// paragraphs[1].style.color = "red"; // другий - червоний
// paragraphs[2].style.textDecoration = "underline"; // третій - підкреслений
// paragraphs[3].style.fontStyle = "italic"; // четвертий - курсив
// // Горизонтальний список без маркерів
// const list = document.getElementById("myList");
// list.style.listStyle = "none"; // прибираємо кружечки
// const listItems = list.querySelectorAll("li");
// listItems.forEach((item) => {
//   item.style.display = "inline"; // горизонтально
//   item.style.marginRight = "0px"; // без відступів
// });
// // Ховаємо <span>
// const span = document.querySelector("span");
// span.style.display = "none"; // або visibility = "hidden"

// task6
// // Отримуємо повідомлення від користувача
// const message1 = prompt("Введіть перше повідомлення:");
// const message2 = prompt("Введіть друге повідомлення:");
// // Записуємо значення у відповідні <input>
// const input1 = document.getElementById("input1");
// const input2 = document.getElementById("input2");
// input1.value = message1;
// input2.value = message2;
// // Міняємо значення місцями
// const temp = input1.value;
// input1.value = input2.value;
// input2.value = temp;

// task7
// // Створення DOM-структури для порожньої HTML-сторінки
// document.addEventListener('DOMContentLoaded', function() {
//     // Очищення тіла документа, якщо там є будь-який контент
//     document.body.innerHTML = '';

//     // Створення елемента main з класами
//     const mainElement = document.createElement('main');
//     mainElement.className = 'mainClass check item';

//     // Створення div з id="myDiv"
//     const divElement = document.createElement('div');
//     divElement.id = 'myDiv';

//     // Створення параграфа з текстом
//     const paragraphElement = document.createElement('p');
//     paragraphElement.textContent = 'First paragraph';

//     // Побудова структури DOM
//     divElement.appendChild(paragraphElement);
//     mainElement.appendChild(divElement);
//     document.body.appendChild(mainElement);

//     // Вивід у консоль для підтвердження створення структури
//     console.log('DOM структура успішно створена!');
//     console.log(document.body.innerHTML);
//   });
