export default function () {
    let soldProducts = calculateSoldProducts();
    let orderedProducts = calculateOrderedProducts();

    return orderedProducts - soldProducts;
}