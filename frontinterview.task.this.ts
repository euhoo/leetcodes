//1 что будет?
// будет постоянно выполняться консоль, но не блокироваться другие задачи
const foo1 = () => {
  console.log('foo1');
  setTimeout(foo1);
};
foo1();

//2 что будет?
// заблокируются задачи и браузер завершит процесс. т.к. макротаски не пустят ничего в стэк вызовов, заблокировав его появляющимися собой
const foo2 = () => {
  console.log('foo2');
  Promise.resolve().then(foo2);
};
foo2();

//3
const data = {
  toFilter: 'admin',
  users: [
    { name: 'Ivan', role: 'user' },
    { name: 'Pete', role: 'admin' },
  ],
  getFilteredUsers: function () {
    return this.users.filter(function (user) {
      return user.role === this.toFilter;
    });
  },
};
console.log(data.getFilteredUsers());
// [];
// 1. что увидим в консоли - []
// 2. какая причина? -  потеряли контекст во вложенной фильтрации
// 3. как поправить?  - функцию фильтрации переделать в стрелочную
// 4. а еще? call, bind, apply
// 5. а еще? внутри функции getFilteredUsers объявить const that = this. и внутри фильтрации that.toFilter

