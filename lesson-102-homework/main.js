// 1) Функция, принимающая имя и возвращающая приветствие
function greet(name) {
    return `Hello "${name}"`;
}

console.log(greet("Иван")); // Hello "Иван"

// 2) Функция, которая принимает массив чисел и выводит в консоль числа больше 10
function printNumbersGreaterThan10(arr) {
    for (let num of arr) {
    if (num > 10) {
    console.log(num);
    }
    }
}

const numbers = [5, 12, 8, 20, 3, 15];
printNumbersGreaterThan10(numbers); 

