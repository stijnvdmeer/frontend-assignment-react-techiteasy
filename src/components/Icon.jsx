import '../styles/icon.css';

import check from '../assets/check.png'
import minus from '../assets/minus.png'

export default function Icon (props) {

    const type = (props.iconType === true ? check : minus )
    const alt = (props.iconType === true ? "yes" : "no" )

    return (
        <li>
            <img className="icons" src={type} alt={alt} /><p>{props.name}</p>
        </li>
    );
}