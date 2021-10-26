function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    // Задание №1.1. Оповещение о добавлении в корзину

    let message; // создайте переменную message
    message = productName; // присвойте переменной message значение переменной productName
    string1 = productName + ' '; // добавьте в конец переменной message пробел
    string2 = string1 + 'за'; // добавьте в конец переменной message текст 'за'
    string3 = string2 + ' '; // добавьте в конец переменной message пробел
    string4 = string3 + productPrice; // добавьте в конец переменной message значение переменной productPrice
    string5 = string4 + ' '; // добавьте в конец переменной message пробел
    string6 = string5 + 'теперь в корзине!'; // добавьте в конец переменной message текст 'теперь в корзине!'
    console.log(message);     // выведите переменную message в консоль

    // Конец решения задания №1.1.

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;

    let newValue; // создайте переменную newValue
    newValue = oldValue; // присвойте ей значение oldValue
    let newValue = value + 1; // увеличьте значение newValue на 1

    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

    let newSum = oldSum + difference; // создайте переменную newSum и присвойте ей сумму oldSum и difference
    let newSumText = newSum + ' ₽'; // создайте переменную newSumText и присвойте ей результат склеивания переменной newSum и текста ' ₽'
    let newSumText = '${newSum} ₽'; // замените склеивание, используемое в newSum Text на шаблонную строку

    // Конец решения задания №1.3.

    return newSumText;
}

