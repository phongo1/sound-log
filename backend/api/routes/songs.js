const { Router } = require('express');
const songsController = require('../controllers/songsController');

const router = Router();

router.get('/', songsController.getSongs);

module.exports = router;
