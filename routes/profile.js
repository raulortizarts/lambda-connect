const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.send('pro route'))

module.exports = router