import calculateOrderedProducts from "./calculateOrderedProducts.js";
import calculateSoldProducts from "./calculateSoldProducts.js";

export default function () {
    let soldProducts = calculateSoldProducts();
    let orderedProducts = calculateOrderedProducts();

    return orderedProducts - soldProducts;
}
