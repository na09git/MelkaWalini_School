const express = require('express')
const passport = require('passport')
const router = express.Router()

// @route   GET /contact
router.get('/stotry_clone', (req, res) => {
    try {
        res.render('stotry_clone')
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
})

module.exports = router