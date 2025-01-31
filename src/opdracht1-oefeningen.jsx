import {inventory} from './constants/inventory.js'

// Opdracht 1
const arrNames = inventory.map(item => {
    return item.name;
})
console.log(arrNames);

// Opdracht 2
const soldOutTVs = inventory.filter((tv) => {
    return tv.originalStock - tv.sold <= 0;
})
console.log(soldOutTVs);
