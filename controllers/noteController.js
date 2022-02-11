// /api/notes endpoint
//getting total notes
const getNotes = (req, res) => {
    res.status(200).json({ message: 'Get notes' })
}

// /api/notes endpoint
// posting new note
const postNotes = (req, res) => {
    res.status(200).json({ message: 'Post notes' })
}

// /api/notes/:id endpoint
// updating note by id
const updateNotes = (req, res) => {
    res.status(200).json({ message: `Update notes ${req.params.id}` })
}

// /api/notes/:id endpoint
// deleting note by id
const deleteNotes = (req, res) => {
    res.status(200).json({ message: `Delete notes ${req.params.id}` })
}

module.exports = {
    getNotes,
    postNotes,
    updateNotes,
    deleteNotes
}