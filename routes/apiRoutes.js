const router = require("express").Router();
const noteRead = require("../db/noteRead");


// GET "/notes" responds with all notes from the database
router.get("/notes", function(req, res) {
  noteRead
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});
//Post new notes to the database in dB
router.post("/notes", (req, res) => {
  noteRead
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

// DELETE "/notes" deletes the note with an id equal to req.params.id
router.delete("/notes/:id", function(req, res) {
  noteRead
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err));
});

module.exports = router;