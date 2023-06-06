const express = require('express');
const auth = require('../middleware/auth');
const stuffController = require('../controllers/stuff');
const multer = require('../middleware/multer');

const router = express.Router();

router.post('/', auth, multer, stuffController.createThing );
router.put('/:id', auth, multer, stuffController.updateAThing);
router.delete('/:id', auth, stuffController.deleteAThing );
router.get('/:id', auth, stuffController.getAThing );
router.get( '/', auth, stuffController.getAllThing );

module.exports = router;
