const { Router } = require('express');
const listsController = require('../controllers/listsController');

const router = Router();

// Return all lists for now
router.get('/users/:userId', listsController.getLists);

module.exports = router;
