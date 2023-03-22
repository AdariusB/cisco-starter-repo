import { useState } from 'react';

export default function IPFetcher(props) {
    const [ip_data, setData] = useState(null);
    const [error, setError] = useState(null);
    const url = props.IP_URL;

    fetch(url)
        .then(response => response.json())
        .then((data) => {
            setData(data.ip);
        })
        .catch((err) => {
            setError(err);
        })
        
    if (ip_data === null && error !== null) {
        return <h3>{`There is a problem fetching the data - ${error}`}</h3>;
    }
    else {
        return <h3>{ip_data}</h3>;
    }
}