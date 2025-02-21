import { HashMap } from "./HashMap";

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.set('banaan', 'blue');

test.set('apple', 'green');
console.log(test.get('hallo'));
console.log(test.get('apple'));
console.log(test.get('hat'));
console.log(test.has('apple'));
console.log(test.has('hat'));
console.log(test.has('hallo'));
console.log(test.remove('hallo'));
// console.log(test.remove('apple'));
test.set('apple', 'green');
test.set('hat', 'gray');
// console.log(test.remove('ice cream'));
console.log(test.length());
// test.set("hello", "world");
// console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());

// test.clear();

console.log(test);