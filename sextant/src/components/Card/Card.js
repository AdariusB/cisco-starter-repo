import './Card.css';
import React from 'react';
import IPFetcher from '../IPFetcher/IPFetcher.js';

export default function Card(props) {
    return (
        <div className="Card">
            <h2 className="cardTitle">{props.title}</h2>
            <IPFetcher
                IP_URL={ props.IP_URL }
            />
        </div>
    )
}