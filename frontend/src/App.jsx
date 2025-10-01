import React, { useEffect, useState } from 'react';
import Board from './components/Board';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

function App() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/boards')
      .then(res => res.json())
      .then(data => setBoards(data));
  }, []);

  return (
    <div>
      <h1>Kanban Colaborativo</h1>
      {boards.map(board => <Board key={board._id} board={board} />)}
    </div>
  );
}

export default App;
