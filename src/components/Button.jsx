/* eslint-disable react/prop-types */

import '../styles/button.css';

export default function Button(props) {
    return (
        <button className={props.classes} onClick={props.onButtonClick}>{props.buttonText}</button>
    );
 }