import React, { useState, useEffect } from 'react';
import './App.css';
import QuoteGenerator from './components/QuoteGenerator';
import quotes from './quotes'; // Import the quotes data source

function App() {
  // State to hold the currently displayed quote and author
  const [currentQuote, setCurrentQuote] = useState({
    text: "Loading...",
    author: "",
  });

  // Function to display a random quote
  const displayRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setCurrentQuote(randomQuote);
  };

  // Load a random quote when the component first mounts
  useEffect(() => {
    displayRandomQuote();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Random Quote Generator</h1>
      </header>
      <main>
        <QuoteGenerator
          currentQuote={currentQuote}
          displayRandomQuote={displayRandomQuote}
        />
      </main>
    </div>
  );
}

export default App;