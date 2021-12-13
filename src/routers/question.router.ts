import { Router } from 'express';
import * as questionController from '../controllers/question.controller';
import auth from '../middlewares/auth.middleware';

const router = Router();

router.post('', questionController.createQuestion);
router.get('', questionController.findNonAnsweredQuestions);
router.post('/:id', auth, questionController.createAnswer);
router.get('/:id', questionController.findQuestionById);

export default router;
