
import './App.css';

import React, { useState, useEffect } from 'react';

function CatFact() {
  const [fact, setFact] = useState('');        // Stav pro uložení faktu o kočkách
  const [error, setError] = useState(null);     // Stav pro chybu

  // Funkce pro načtení faktu o kočkách
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

  // Načteme fakt o kočkách při načtení komponenty
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
