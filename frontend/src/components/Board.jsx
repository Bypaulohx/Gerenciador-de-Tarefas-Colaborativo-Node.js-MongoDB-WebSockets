import React from 'react';
import Column from './Column';

function Board({ board }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
      <h2>{board.title}</h2>
      {board.lists?.map(list => <Column key={list._id} list={list} />)}
    </div>
  );
}

export default Board;
