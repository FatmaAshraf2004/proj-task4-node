const express = require('express');
const router = express.Router();

const {createNote, showNotes, showNote, updateNote, deleteNote} = require('../controller/note.control.js');

router.post('/create', createNote);
router.get('/', showNotes);
router.get('/:id', showNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router