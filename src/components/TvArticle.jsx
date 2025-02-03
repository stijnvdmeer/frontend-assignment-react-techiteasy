import '../styles/tvarticle.css';
import Icon from '../components/Icon';

import getProductTitleString from "../helperFunctions/getProductTitleString.js";
import formatPriceString from "../helperFunctions/formatPriceString.js";



export default function TvArticle(props) {
    return (
        <article className="tvArticle-outer">
            <img src={props.tv.sourceImg} alt="tv" />
            <div className="tvArticle-inner">
                <h2>{getProductTitleString(props.tv)}</h2>
                <h2>{formatPriceString(props.tv)}</h2>
                <h2></h2>
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