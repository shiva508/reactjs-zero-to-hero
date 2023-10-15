const arr = [1, 2, 3, 4, 5];
arr.push(6);
const index = arr.findIndex((item) => {
  return item == 4;
});
console.log(index);
const multi = arr.map((item) => item * 4);
console.log(multi);
