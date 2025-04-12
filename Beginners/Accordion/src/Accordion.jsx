import React, { useEffect, useState } from 'react';

export default function Accordion() {
  const [error, setError] = useState('');
  const [details, setDetails] = useState([]);
  const [state, setState] = useState(null);
  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then((response) => response.json())
      .then((data) => {
        setDetails(data.quotes);
        console.log(data);
      })
      .catch((error) => setError(`Error Fetching Data ${error}`));
  }, []);
  const handleClick = (index) => {
    setState(state === index ? null : index);
  };
  return (
    <div className="container">
      <h1>Quotes from famous people</h1>
      {details.length > 0 ? (
        <ul className="accordion-tab">
          {details.map((data, index) => (
            <li key={index} onClick={() => handleClick(index)}>
              <h3>
                Famous Author {data.author} said...{' '}
                <span>{state === index ? '-' : '+'}</span>
              </h3>
              <div className={`quote-content ${state === index ? 'open' : ''}`}>
                <p>{data.quote}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>Data Not Found !!</div>
      )}
    </div>
  );
}
