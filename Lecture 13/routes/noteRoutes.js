const express = require("express")
const { getNotes, createNote, getNoteById, updateNote, deleteNote } = require("../controllers/notesControllers.js")
const router = express.Router()

router.get("/notes",getNotes)
router.get("/notes/:id",getNoteById)
router.post("/notes",createNote)
router.put("/update-note/:id",updateNote)
router.delete("/delete-note/:id",deleteNote)

module.exports = router