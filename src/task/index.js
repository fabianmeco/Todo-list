const express =require('express');
const router = express.Router();
const instanceRouter = express.Router();

const taskController = require('./task.controller');

router.post('/', taskController.post);

router.get('/', taskController.get);

router.use('/:id', taskController.getOneMiddleware, instanceRouter);

router.delete('/', taskController.delete);

router.put('/', taskController.put);

module.exports = router;
