import {Request, Response, Router} from 'express';
import urlsRoute from './urls.route';


const routes = Router();

routes.get('/health', (req : Request, res: Response) => {
    res.send('server health good....');
});

/**
 * routes connect
 */
routes.use(urlsRoute)

export default routes;