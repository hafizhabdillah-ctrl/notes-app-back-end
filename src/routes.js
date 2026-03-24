import express from 'express';
import {
  createNote,
  getNotes,
  getNotesById,
  editNoteById,
  deleteNotesById
} from './controller.js';

const router = express.Router();

router.post('/notes', createNote);
router.get('/notes', getNotes);
router.get('/notes/:id', getNotesById);
router.put('/notes/:id', editNoteById);
router.delete('/notes/:id', deleteNotesById);

export default router;