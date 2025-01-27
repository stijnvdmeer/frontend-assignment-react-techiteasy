import {inventory} from '../constants/inventory.js'

export default function () {
    let soldProducts = 0;

    inventory.forEach((item) => {
        soldProducts += item.sold;
    });

    console.log(soldProducts);
    return soldProducts;
}