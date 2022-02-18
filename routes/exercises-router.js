const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.render('exercises/exercises-list')
})

module.exports = router;