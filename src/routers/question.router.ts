import { Router } from 'express';
import * as questionController from '../controllers/question.controller';

const router = Router();

router.post('', questionController.createQuestion);
router.get('/:id', questionController.findQuestionById);

export default router;
