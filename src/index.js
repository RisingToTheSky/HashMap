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
test.set('apple', 'green');
test.set('hat', 'gray');
test.set('moon', 'silver');
test.set('sky', 'blue');
test.set('hello', 'world');
test.set('apple', 'red');
test.set('hat', 'gray');

console.log(test.has('apple'));
console.log(test.has('hallo'));
console.log(test.has('lion'));
console.log(test.get('moon'));
console.log(test.get('frog'));
console.log(test.get('hallo'));

console.log(test.remove('moon'));
console.log(test.remove('sky'));
console.log(test.remove('hello'));
console.log(test.remove('panenka'));

console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());

test.clear();

console.log(test);