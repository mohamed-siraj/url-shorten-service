import {NextFunction, Request, Response} from 'express';
import UrlsModel from '../models/url.model';
import josSchema from '../validation/url.validation';

const validateUrl = async (req : Request, res: Response, next : NextFunction) => {

    const { error, value } = josSchema.validate(req.query);

    if(error){
        res.send(error.message);
    }
    console.log(req.query.url);
    const result = await UrlsModel.findOne({sortUrl : req.query.url});

    if(!result){
        res.send('not found url')
    }

    next();
};

export default validateUrl;