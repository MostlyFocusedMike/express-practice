const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    const msg = `
hi does this look nice?
I hope it does.
    `;
    res.send(msg);
});

module.exports = router;
