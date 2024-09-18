const express = require('express');
const router = express.Router();
const { generateAgenda } = require('../controllers/agendaController');

// Route to handle agenda generation
router.post('/generate-agenda', generateAgenda);

module.exports = router;