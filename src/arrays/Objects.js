const user = {
  name: "Shiva",
  age: 32,
};
console.log(user);

const userInfo = {
  name: "Shiva",
  age: 32,
  doubleAge() {
    return this.age * 2;
  },
};
console.log(userInfo.doubleAge());

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const userData = new User("Shiva", 32);
