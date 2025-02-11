import { HashMap } from "./HashMap";

const test = new HashMap(0.75, 16);

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
// test.set('grape', 'purple');
// test.set('hat', 'black');
// test.set('ice cream', 'white');
// test.set('jacket', 'blue');
// test.set('kite', 'pink');
// test.set('lion', 'golden');

test.set('apple', 'green');
console.log(test.get('apple'));
console.log(test.has('apple'));
test.remove('apple');
console.log(test.remove('ice cream'));
console.log(test.length());

console.log(test);