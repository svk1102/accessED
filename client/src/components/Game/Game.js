import React, { useState, useEffect } from 'react';
import './Game.css';
import Nav from '../NavBar/Nav';
import SpeechToText from '../Students/speechToText';

const cards = [
    { id: 1, image: 'https://via.placeholder.com/150x150?text=1' },
    { id: 2, image: 'https://via.placeholder.com/150x150?text=2' },
    { id: 3, image: 'https://via.placeholder.com/150x150?text=3' },
    { id: 4, image: 'https://via.placeholder.com/150x150?text=4' },
    { id: 5, image: 'https://via.placeholder.com/150x150?text=5' },
    { id: 6, image: 'https://via.placeholder.com/150x150?text=6' },
    { id: 7, image: 'https://via.placeholder.com/150x150?text=7' },
    { id: 8, image: 'https://via.placeholder.com/150x150?text=8' },
  ];

function Game() {
  const [cardsList, setCardsList] = useState(cards.concat(cards)); // Duplicate the array
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const shuffledCards = cardsList.sort(() => Math.random() - 0.5);
    setCardsList(shuffledCards);
  };

  const handleClick = (card) => {
    if (selectedCards.length === 2 || matchedCards.includes(card.id)) {
      return;
    }

    setSelectedCards([...selectedCards, card]);

    if (selectedCards.length === 1) {
      if (selectedCards[0].image === card.image) {
        setMatchedCards([...matchedCards, selectedCards[0].id, card.id]);
        setSelectedCards([]);
      } else {
        setTimeout(() => {
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (matchedCards.length === cardsList.length) {
      setMessage('Congratulations, you won!');
    }
  }, [matchedCards]);

  return (
    <>
    <div>
        <Nav/>
        <p className="text-4xl font-bold text-black mt-32">Memory Game</p>
      <div className="cards-container mt-10">
        {cardsList.map((card) => (
          <div
            key={card.id}
            className={`card ${selectedCards.includes(card) ? 'selected' : ''} ${
              matchedCards.includes(card.id) ? 'matched' : ''
            }`}
            onClick={() => handleClick(card)}
          >
            <img src={card.image} alt="card" />
          </div>
        ))}
      </div>
      <p className="message">{message}</p>
      <button onClick={shuffleCards}>New Game</button>
    </div>
    <SpeechToText/>
    </>
  );
}

export default Game;
