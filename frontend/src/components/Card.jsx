import React from 'react';

function Card({ card }) {
  return (
    <div style={{ background: '#fff', padding: '0.5rem', margin: '0.5rem 0', border: '1px solid #ccc' }}>
      {card.content}
    </div>
  );
}

export default Card;
