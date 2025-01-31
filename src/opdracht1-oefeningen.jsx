import {bestSellingTv as options, inventory} from './constants/inventory.js'

// Opdracht 1a
const arrNames = inventory.map((item) => {
    return item.name;
});
console.log(arrNames);

// Opdracht 1b
const soldOutTVs = inventory.filter((tv) => {
    return tv.originalStock - tv.sold <= 0;
});
console.log(soldOutTVs);

// Opdracht 1c
const selTV = inventory.find((tv) => {
    return tv.type === "NH3216SMART";
});
console.log(selTV);

// Opdracht 1d
const sportTVs = inventory.map((tv) => {
    if(tv.refreshRate >= 100) return {name: tv.name, available:true};
    else return {name: tv.name, available:false};
});
console.log(sportTVs);

// opdracht 1e
const largeTVs = inventory.filter((tv) => {
    return !!tv.availableSizes.find((size) => {
        return size >= 65;
    });
});
console.log(largeTVs);

// Opdracht 1f
const ambiTVs = inventory.filter((tv) => {
    return tv.options.find((option) => {
        return option.name === "ambiLight";
    }).applicable === true;
});
console.log(ambiTVs);