const list = [1, 2, 3, 4, 5];
console.log(list);

const list2 = list.map(x => x * x);
// [1, 4, 9, 16, 25]
console.log(list2);

const list3 = list.map(x => x + 1);
console.log(list3);
// [2, 3, 4, 5, 6]

// fonction déclarée
function carre1(x) {
  return x * x;
}

//expression de fonction
const carre2 = function (x) {
  return x * x;
};

// fonction fléchée
const carre3 = x => x * x;
