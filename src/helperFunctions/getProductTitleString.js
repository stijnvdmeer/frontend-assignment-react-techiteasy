import {bestSellingTv} from "../constants/inventory.js";

export default function () {
    return `${bestSellingTv.brand} ${bestSellingTv.type} ${bestSellingTv.name}`;
}