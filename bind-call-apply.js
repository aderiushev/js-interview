function showFullName(param1, param2) {
    console.log(arguments); // ['param1', 'param2']
    console.log( this.firstName + " " + this.lastName); // "Василий Петров"
}

var user = {
  firstName: "Василий",
  lastName: "Петров"
};

// функция вызовется с this=user
showFullName.call(user, 'param1', 'param2') 
// этот вызов идентичен
showFullName.apply(user, ['param1', 'param2']);
// установит новый контекст и вернёт функцию.
var bindedShowFullName = showFullName.bind({
  firstName: "Алексей",
  lastName: "Пупкин"
});
