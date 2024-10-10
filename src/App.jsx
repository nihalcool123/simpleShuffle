import './App.css';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    'apple',
    'mango',
    'lemon',
    'wine',
    'red',
  ]);

  const handleShuffle = () => {
    const itemsToBeShuffled = [...items];

    for (let i = itemsToBeShuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [itemsToBeShuffled[i], itemsToBeShuffled[j]] = [
        itemsToBeShuffled[j],
        itemsToBeShuffled[i],
      ];
    }
    setItems(itemsToBeShuffled);
  };

  return (
    <>
      <div>
        <h1>List of Items</h1>

        <ul>
          {items.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
        <button onClick={handleShuffle}>Shuffle</button>
      </div>
    </>
  );
}

export default App;
