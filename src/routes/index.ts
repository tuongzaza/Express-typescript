import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.render('index', { title: 'Home', message: res.__('Hello World') });
});

export default router;
