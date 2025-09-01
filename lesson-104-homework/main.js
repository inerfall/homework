const myObject = {
    name: "Глеб",
    age: 18,
    occupation: "Разработчик",
    greet: function(personName) {
    return `Hello "${personName}"`;
    }
};

console.log(myObject.greet("Алиса")); 