
import './App.css';

import React, { useState, useEffect } from 'react';

function CatFact() {
  const [fact, setFact] = useState('');   
  const [error, setError] = useState(null); 


  const getCatFact = () => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        setFact(data.fact);                     
        setError(null);                        
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Failed to load a cat fact. Try again later.');
      });
  };

 
  useEffect(() => {
    getCatFact();
  }, []);

  return (
    <div>
      <h2>Cat Fact</h2>
      {error ? (
        <p>{error}</p>                          // Zobrazíme chybu, pokud existuje
      ) : (
        <p>{fact}</p>                           // Zobrazíme fakt, pokud je dostupný
      )}
      <button onClick={() => getCatFact()}>Get New Cat Fact</button>
    </div>
  );
}

export default CatFact;
