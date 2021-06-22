import { Router } from 'express';
import wrap from '@app/middleware/wrap';
import * as controller from '@app/controllers/gist/api';

const router = Router();

router.get('/gists', wrap(controller.getGists));

export default router;