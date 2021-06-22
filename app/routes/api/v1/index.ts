import { Router } from 'express';
import wrap from '@app/middleware/wrap';
import * as controller from '@app/controllers/gist/api';

const router = Router();

router.get('/gists', wrap(controller.getGists));
router.get('/gists/:id', wrap(controller.getGist));

export default router;