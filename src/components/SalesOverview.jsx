/* eslint-disable react/prop-types */

import '../styles/salesOverview.css'

export default function SalesOverview(props) {
    return (
        <article className={props.classes} id={props.id}>
            <p>{props.title}</p>
            <h2>{props.value}</h2>
        </article>
    );
}