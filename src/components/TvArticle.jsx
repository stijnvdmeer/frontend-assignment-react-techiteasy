import '../styles/tvarticle.css';
import soldOut from '../assets/out-of-stock.png';

import Icon from '../components/Icon';

import getProductTitleString from "../helperFunctions/getProductTitleString.js";
import formatPriceString from "../helperFunctions/formatPriceString.js";
import getProductSizesString from "../helperFunctions/getProductSizesString.js";
import calculateRemnantProduct from "../helperFunctions/calculateRemnantProducts.js";



export default function TvArticle(props) {
    return (
        <article className="tvArticle-outer">
            <img src={calculateRemnantProduct(props.tv) === 0 ?  soldOut : props.tv.sourceImg} alt="tv" />
            <div className="tvArticle-inner">
                <h2>{getProductTitleString(props.tv)}</h2>
                <h2>{formatPriceString(props.tv)}</h2>
                <h2>{getProductSizesString(props.tv)}</h2>
                <ul>
                    {
                        props.tv.options.map(option => {
                            return (<Icon iconType={option.applicable} name={option.name} />);
                        })
                    }
                </ul>
            </div>
        </article>
    );
}