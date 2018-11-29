const express = require('express');
const router = express.Router();

const databaseConnection = require('../../databaseConnection');
router.get('/', (req, res) => {
    var sqlQuery = "SELECT * FROM posts";
    databaseConnection.query(sqlQuery, (err, result) => {
        if(err) throw err;
        res.send(result);
    })
})


module.exports = router;