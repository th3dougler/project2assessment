var express = require('express');
var router = express.Router();
var todoCtrl = require('../controllers/todos');

/* GET home page. */
router.get('/', todoCtrl.index);


router.post('/', todoCtrl.create)

router.delete('/:id', todoCtrl.delete);

router.delete
module.exports = router;
