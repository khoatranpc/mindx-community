'use client';
import React, { useState, useEffect } from 'react';
import './sstyle.scss';

const Students = () => {
    const [cards, setCards] = useState([
      { id: 1, name: 'Phạm Tiến Dũng', review: 'Review 1', rating: 4, avatar: 'https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg' },
      { id: 2, name: 'Dũng Phạm', review: 'Review 2', rating: 5, avatar: 'https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg' },
      { id: 3, name: 'Phạm Dũng', review: 'Review 3', rating: 3, avatar: 'https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg' },
      { id: 4, name: 'Tiến Dũng', review: 'Review 4', rating: 4, avatar: 'https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg' },
      { id: 5, name: 'Dũng', review: 'Review 5', rating: 5, avatar: 'https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg' },
      { id: 6, name: 'MindX Student', review: 'Review 6', rating: 4, avatar: 'https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg' },
    ]);

  const [visibleCards, setVisibleCards] = useState(cards.slice(0, 3));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % (cards.length - 2));
      setVisibleCards(cards.slice(currentIndex, currentIndex + 3));
    }, 3000); 
    return () => clearInterval(intervalId);
  }, [cards, currentIndex]);

  return (
    <div className="card-container">
      {visibleCards.map((card, index) => (
        <div key={card.id} className="card">
          <div className="avatar">
            <img src={card.avatar} alt="Avatar" />
          </div>
          <div className="card-content">
            <h2 className="name-opti">{card.name}</h2>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <i key={i} className={i < card.rating ? 'fas fa-star' : 'far fa-star'} />
              ))}
            </div>
            <div className="review">
              <h3>{card.review}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Students;