import {Request, Router, Response} from 'express';
import UrlsController from '../controller/urls.controller';
import josSchema from '../validation/url.validation';
import validateUrl from '../middleware/validate.middleware';

const urlsRoute = Router();

urlsRoute.post('/urls', async (req: Request, res: Response) => {

    const { error, value } = josSchema.validate(req.body);

    if(error){
        res.send(error.message);
    }

    const urlController = new UrlsController();
    const response = await urlController.create(req.body);
    res.send(response);
});

urlsRoute.get('/urls', async (req: Request, res: Response) => {
    const urlController = new UrlsController();
    const response = await urlController.get();
    res.send(response);
});

urlsRoute.get('/:sortUrl',validateUrl, async (req: Request, res: Response) => {

    const urlController = new UrlsController();
    const response = await urlController.redirect(req.params.sortUrl);
    res.writeHead(301, {
        Location: response
      }).end();
});


urlsRoute.delete('/:sortCode', async (req: Request, res: Response) => {

    const urlController = new UrlsController();
    const response = await urlController.delete(req.params.sortCode);
    res.send(response);
});

export default urlsRoute;