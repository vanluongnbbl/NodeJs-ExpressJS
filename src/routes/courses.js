const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

// newsController.index
router.get('/create', coursesController.create);
router.get('/:id/edit', coursesController.edit)

router.post('/store', coursesController.store);
router.get('/:slug', coursesController.show);
router.put('/:id', coursesController.update);
router.delete('/:id', coursesController.delete);


module.exports = router;
