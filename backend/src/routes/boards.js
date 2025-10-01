import express from 'express';
import Board from '../models/Board.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const boards = await Board.find().populate('lists');
  res.json(boards);
});

router.post('/', async (req, res) => {
  const board = new Board({ title: req.body.title });
  await board.save();
  res.status(201).json(board);
});

export default router;
