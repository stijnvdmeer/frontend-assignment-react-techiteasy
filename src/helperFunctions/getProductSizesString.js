export default function (tv) {
    let sizesListString = "";

    if(tv.availableSizes === 1) return `${tv.availableSizes[0]} Inch (${Math.round(tv.availableSizes[0] * 2.54)} cm)`
    tv.availableSizes.forEach(size => {
        sizesListString += `${size} Inch (${Math.round(size * 2.54)} cm) | `
    });

    return sizesListString;
}