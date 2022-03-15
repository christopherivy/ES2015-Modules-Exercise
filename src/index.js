import foods from './foods';
import { choice, remove } from './helpers';


let food = choice(foods);

console.log(`I'd like one ${food}, please.`);
console.log(`Here you go: ${food}`);
console.log(`Delicious! May I have another ${food} ?`);

let fruitRemaing = remove(food, foods);

remove(food, foods);

console.log(`I'm sorry, we are all out of ${food} . We only have ${fruitRemaing.length} left.`);