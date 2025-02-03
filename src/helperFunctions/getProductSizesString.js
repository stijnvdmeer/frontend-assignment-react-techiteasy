import {bestSellingTv} from "../constants/inventory.js";

export default function () {
    let sizesListString = "";

    if(bestSellingTv.availableSizes === 1) return `${bestSellingTv.availableSizes[0]} Inch (${Math.round(bestSellingTv.availableSizes[0] * 2.54)} cm)`
    bestSellingTv.availableSizes.forEach(size => {
        sizesListString += `${size} Inch (${Math.round(size * 2.54)} cm) | `
    });

    return sizesListString;
}