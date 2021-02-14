const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            burger: data,
        };
        console.log('hbsObject', hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burger', (req, res) => {
    burger.create(['name', 'Big Mac'], [req.body.name, req.body.sleepy], (result) => {
        res.json({ id: result.insertID });
    });
});

router.put('/api/burger/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;

    console.log('condition', condition);

    burger.update(
        {
            devoured: req.body.sleepy,
        },
        condition,
        (result) => {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;