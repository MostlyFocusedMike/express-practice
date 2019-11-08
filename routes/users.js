const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
    res.send('respond with a resource');
});

router.get('/:id', (req, res) => {
    const thing = req.params.id;
    const query = req.query.hi;
    res.send(`user ${thing} with q ${query}`);
});


module.exports = router;
