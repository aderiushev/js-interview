// Замыкание – это функция вместе со всеми внешними переменными, которые ей доступны. Сохраняет значение "внешних" переменных!
function makeCounter() {
  var currentCount = 1;

  return function() {
    return currentCount++;
  };
}

var counter = makeCounter(); // [[Scope]] -> {currentCount: 1}

alert( counter() ); // 1, [[Scope]] -> {currentCount: 1}
alert( counter() ); // 2, [[Scope]] -> {currentCount: 2}

// Неудачная попытка. т.к. i во время клика будет = links.length из-за того что её значение сохранялось в замыкании во время цикла т.е. при в момент клика будет взята переменная, которая уже была инкрементирована.
or (var i = 0; i < links.length; i++) {
   links[i].onclick = function() {
      alert(i);
   }
}
// Решение. Здесь с помощью еще одного замыкания мы «затеняем» переменную i, создавая ее копию в его локальной области видимости на каждом шаге цикла.
for (var i = 0; i < links.length; i++) {
   (function(i) {
      links[i].onclick = function() {
         alert(i);
      }
   })(i);
}

// Свойства функции
function makeCounter() {
  function counter() {
    return counter.currentCount++;
  };
  counter.currentCount = 1;

  return counter;
}

var counter = makeCounter();
alert( counter() ); // 1
alert( counter() ); // 2

