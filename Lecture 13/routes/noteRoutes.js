const express = require("express")
const { getNotes, createNote, getNoteById, updateNote, deleteNote } = require("../controllers/notesControllers.js")
const {isAuthorized, isLoggedIn} = require("../middlewares/isAuthorized.js")
const router = express.Router()


router.get("/notes",isAuthorized, isLoggedIn,getNotes)
router.get("/notes/:id",isAuthorized, isLoggedIn,getNoteById)
router.post("/notes",createNote)
router.put("/update-note/:id",updateNote)
router.delete("/delete-note/:id",deleteNote)

module.exports = router