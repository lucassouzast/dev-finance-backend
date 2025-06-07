const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const entriesRoutes = require('./entriesRoutes');

router.use('/auth', userRoutes);       // URLs começam com /api/auth/register e /api/auth/login
router.use('/entries', entriesRoutes); // URLs começam com /api/entries

module.exports = router;
