import React from 'react';
import Card from './Card';

function Column({ list }) {
  return (
    <div style={{ background: '#eee', padding: '1rem' }}>
      <h3>{list.title}</h3>
      {list.cards?.map(card => <Card key={card._id} card={card} />)}
    </div>
  );
}

export default Column;
