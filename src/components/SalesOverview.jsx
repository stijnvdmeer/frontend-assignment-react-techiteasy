/* eslint-disable react/prop-types */

export default function SalesOverview(props) {
    return (
        <article>
            <p>{props.title}</p>
            <h2>{props.value}</h2>
        </article>
    );
}