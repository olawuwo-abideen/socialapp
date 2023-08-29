const express = require('express');
import {  } from "../controllers/.js";
const { getRelationships, addRelationship, deleteRelationship } = require('../controllers/relationshipController');

const router = express.Router()

router.get("/", getRelationships)
router.post("/", addRelationship)
router.delete("/", deleteRelationship)


module.exports = router;