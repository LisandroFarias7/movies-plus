const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.render('movies/api-page');
})



module.exports = router;