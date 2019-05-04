const express = require('express');
const textProcessRoutes = require('./textProcess.route');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/textProcess', textProcessRoutes);

module.exports = router;
