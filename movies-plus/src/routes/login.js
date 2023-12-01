const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const pool = require('../database');


router.get('/', (req,res) => {
    res.render('movies/login')
})


router.post('/', (req,res) => {
    const data = req.body;
    pool.query('SELECT * FROM users WHERE username = ?', [data.username], (err, userdata) => {
        if(userdata.length > 0){
            res.render('movies/login', {error: 'ERROR: el usuario ya existe!!'})
        }
        else {
            bcrypt.hash(data.password, 12).then(hash => {
                data.password = hash;
                console.log(data)
                pool.query('INSERT INTO users  SET ?', [data], (err, rows) => {
                    res.redirect('/movies');
                });
            });
        };
    });  
});

module.exports = router;