function helloWord() {
  console.log("Hi! ");
}
helloWord();

function welcomeToWorld(name) {
  console.log("Welcome ," + name);
}
welcomeToWorld("Shiva");

function welcomeToMarse(welcome = "Welcome ,", name) {
  console.log(welcome + name);
}
welcomeToMarse("Shiva");

function passwordGenerator() {
  return "Password";
}
const password = passwordGenerator();
console.log(password);

export default (name, password) => {
  return name + " " + password;
};
