/**
 * Created by spirit on 2014-08-18.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.json({message: 'welcome to our api!'});
});

module.exports = router;
