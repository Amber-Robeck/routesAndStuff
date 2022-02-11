const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Get notes' })
})

router.post('/', (req, res) => {
    res.status(200).json({ message: 'Post notes' })
})

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update notes ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete notes ${req.params.id}` })
})
module.exports = router;