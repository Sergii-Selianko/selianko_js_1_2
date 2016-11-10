/* ########## TASK 1 ########## */

function pow(x, n) {
  var result = x;
  for (i = 1; i < n; i++) {
  result *=x;
  }

  if (exponent == 0) {
    result = 1;
  }

  return result;
}

var namber = prompt('Введите число: ', '');
function isNumeric(namber) {
  return !isNaN(parseFloat(namber)) && isFinite(namber);
}

while (isNumeric(namber) == false) {
namber = prompt('Введенны недопустимые даные! Введите другое число: ', '');
}

var exponent = prompt('Введите степень', '');
while (isNumeric(exponent) == false) {
exponent = prompt('Введенны недопустимые даные!! Введите другую степень: ', '');
}

if (exponent >= 0) {
  x = namber;
  n = exponent;
}

if (exponent < 0) {
  x = 1/namber;
  n = -exponent;
}

alert('Результат: ' + namber + ' ^ ' + exponent + ' = ' + pow(x, n) + ' (Доступен в консоли по завершению 2-й части)');
console.log('Результат: ' + namber + ' ^ ' + exponent + ' =', pow(x, n));

/* ########## TASK 2 ########## */

var loginName = [];

for (i = 0; i < 5; i++ ) {
  var enterName = prompt('Введите ' + (i + 1) + '-е имя', '');

  for(j = 0; j < loginName.length; j++) {
    while(enterName === loginName[j]) {
      enterName = prompt('Введенное имя уже есть в списке! Введите другое имя:', '');
    }
  }
  loginName[i] = enterName;
}

var loginUser = prompt('Введите имя пользователя - ', '');
function checkUser() {
  var resultCheck;

  for(i = 0; i < loginName.length ; i++) {
    if (loginName[i] === loginUser) {
      return resultCheck = loginName[i];
    }
  }
  return resultCheck = loginUser;
}

if (checkUser() == loginName[i]) {
  alert(checkUser() + ' Вы успешно ввошли!');
} else {
  alert(checkUser() + ' Вас нет в списке!');
}
