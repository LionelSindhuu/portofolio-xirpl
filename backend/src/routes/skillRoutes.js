const express = require('express');
const router = express.Router();
const skillsController = require('../controller/skillController');

router.get('/', skillsController.getAllSkills);
router.get('/:id', skillsController.getSkillsById);
router.post('/', skillsController.createSkills);
router.put('/:id', skillsController.updateSkills);
router.delete('/:id', skillsController.deleteSkills);

module.exports = router;