const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('movies/inicio')
});



module.exports = router;