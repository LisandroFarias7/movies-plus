const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/add', (req,res) => {
    res.render('movies/add');
});

router.post('/add', async (req, res) =>{
    const { title, description, image} = req.body;
    const new_movie = {
        title,
        description,
        image
    };
    await pool.query('INSERT INTO movies set ?', [new_movie]);
    res.redirect('/movies');
});

router.get('/', async (req, res) => {
    const movies = await pool.query('SELECT * FROM movies');
    res.render('movies/list', {movies})
})

router.get('/delete/:id', async (req,res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM movies WHERE ID = ?', [id]);
    res.redirect('/movies');
});

router.get('/edit/:id', async (req,res) => {
    const { id } = req.params;
    const movies = await pool.query('SELECT * FROM movies WHERE id = ?', [id]);
    res.render('movies/edit', {movie: movies[0]})
});

router.post('/edit/:id', async (req,res) => {
    const { id } = req.params;
    const { title, description, image } = req.body;
    const new_movie = {
        title,
        description,
        image
    }
    await pool.query('UPDATE movies SET ? WHERE id = ?', [new_movie, id]);
    res.redirect('/movies');
})





module.exports = router;