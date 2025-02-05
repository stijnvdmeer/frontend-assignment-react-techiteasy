import {inventory} from "../constants/inventory.js";

export default function () {
    let orderedProducts = 0;

    inventory.forEach(item => {
       orderedProducts += item.originalStock;
    });
    return orderedProducts;
}