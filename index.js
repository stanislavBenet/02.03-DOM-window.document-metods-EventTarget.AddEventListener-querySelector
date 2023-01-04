"use strict";

/* необходимо нажимая на кнопку вызывать функцию showMessage. Для этого необходимо сделать 3 шага: 
1.Получить кнопку
2.Нажать на кнопку
3.Вызвать функцию*/

function showMessage(msg = "1") {
   console.log(msg);
}

/*           1 шаг
получаем доступ к кнопке через контекст window.document путем поиска необходиміх методов у document 
https:developer.mozilla.org/ru/docs/Web/API/Document
getElementById();
getElementsByClassName();
getElementsByName();
getElementsByTagName();
getElementsByTagNameNS()(en - US);
getSelection();
querySelector()
querySelectorAll()
*/

//const button = window.document.getElementsByTagName('button') - так как без window работа браузера невозможна, его можно не писать:

const [button1, button2] = document.getElementsByTagName("button");

/* С помощью нужного (через селектор, тег, айдишник) метода .document получаем доступ к нужному элементу HTML файла с помощью структуры DOM и сохраняем в переменной button 
в переменной сохраняется HTML-коллекция всех 'button' к которым мы обращались(массив с кнопками) и обратиться к нужной мы можем с помощью деструктуризации, а так как это символ итератор, мы можем применить операторы спред и цикл for of*/

/*                  2 шаг
  После получения доступа, мы используем evenTarget 
  https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/EventTarget
  для того чтобы отследить действие (подписаться на действие) evenTarget.addEvenListener(), на место 'evenTarget' ставим элемент, который ходим подписать на событие      
  .addEvenListener() метод принимает аргументы, первый из них это тип действия,события
  https://developer.mozilla.org/en-US/docs/Web/Events#event_listing 
  вторым принимает функцию JS, которая будет включатся после того как произойдет действие (1 аргумент)
  и третий необязательный аргумент 
  Объект options, который определяет характеристики объекта, прослушивающего событие. Доступны следующие варианты:
  capture: Boolean указывает, что события этого типа будут отправлены зарегистрированному обработчику listener перед отправкой на EventTarget, расположенный ниже в дереве DOM.
  once: Boolean указывает, что обработчик должен быть вызван не более одного раза после добавления. Если true, обработчик автоматически удаляется при вызове.
  passive: Boolean указывает, что обработчик никогда не вызовет preventDefault(). Если всё же вызов будет произведён, браузер должен игнорировать его и генерировать консольное предупреждение. Пример Улучшение производительности прокрутки с помощью passive true        */

//button1.addEventListener("click", showMessage()); - так функция будет вызываться сама, чтоб этого не было и можно было передать аргументы функции, нам нужна callback функция анонимная, чтоб она возвращала другую функцию уже с аргументами

button1.addEventListener("click", showMessage);

// function action() {
//    showMessage("now better");
// }
// button2.addEventListener('click', action)
//ниже тоже самое, только с анонимной функцией стрелкой

button2.addEventListener("click", () => showMessage("haaaaai"));

/* Так как все методы document.get возвращают коллекцтю эллементов (массив), не зависимо от количества он менее быстрый чем методы document.querySelector, document.querySelectorAll, которые возвращают ПЕРВЫй найденный элемент из набораю Но эти методы не динамичные, их нельзя изменять в динамике */

const heading1 = document.getElementById("heading");
const heading2 = document.querySelector("#heading");
