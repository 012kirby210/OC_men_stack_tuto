const express = require('express');
const Thing = require('../models/Things');
const router = express.Router();

const stuffController = require('../controllers/stuff');

router.post('/', stuffController.createThing );
router.put('/:id', stuffController.updateAThing);
router.delete('/:id', stuffController.deleteAThing );
router.get('/:id', stuffController.getAThing );
router.get( '/', stuffController.getAllThing );

module.exports = router;
