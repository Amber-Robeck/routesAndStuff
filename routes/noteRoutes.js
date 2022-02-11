const express = require('express');
const router = express.Router();
const { getNotes, postNotes, updateNotes, deleteNotes } = require('../controllers/noteController')

router.route('/')
    .get(getNotes)
    .post(postNotes)

router.route('/:id')
    .put(updateNotes)
    .delete(deleteNotes)


module.exports = router;