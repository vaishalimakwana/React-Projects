import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const QuotesGenerator = () => {
  const [quotes, setQuotes] = useState([]);
  const [getQuotes, setGetQuotes] = useState(null);
  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes);
      })
      .catch((error) => console.log(error));
  }, []);
  const generateQuote = () => {
    const randomQ = Math.floor(Math.random() * quotes.length);
    const getRandom = quotes[randomQ];
    setGetQuotes(getRandom);
  };
  return (
    <div style={{ margin: '0 auto', padding: '2em' }}>
      <h1>Quotes of the Day !!</h1>
      <button type="submit" onClick={generateQuote} style={{ margin: '2em' }}>
        Feeling Positive !!
      </button>

      <div>
        <div>
          {getQuotes && (
            <div
              style={{
                fontSize: '2.5em',
                fontStyle: 'italic',
                width: '80%',
                margin: '2em auto',
              }}
            >
              <strong>{getQuotes.author}</strong>: <p>"{getQuotes.quote}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuotesGenerator;
