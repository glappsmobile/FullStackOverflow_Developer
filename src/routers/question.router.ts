import { Router } from 'express';
import * as questionController from '../controllers/question.controller';
import auth from '../middlewares/auth.middleware';

const router = Router();

router.post('', auth, questionController.createQuestion);

export default router;
