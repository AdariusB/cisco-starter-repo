import './Card.css';
import React from 'react';

export default function Card(props) {
    return (
        <div className="Card">
            <h2 className="cardTitle">{props.title}</h2>
            <h3>{props.data}</h3>
        </div>
    )
}