const express = require('express');
const router = express.Router();

const cours = require('../controllers/cours');

router.get('/listcour', cours.listCours);

router.post('/addcour', cours.addCours);

router.put('/editcour/:id', cours.editCours);

router.delete('/deleteCour/:id', cours.deleteCours);

module.exports = router;