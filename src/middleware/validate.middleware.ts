import {NextFunction, Request, Response} from 'express';
import UrlsModel from '../models/url.model';

const validateUrl = async (req : Request, res: Response, next : NextFunction) => {

    const result = await UrlsModel.findOne({sortUrl : req.params.sortUrl});

    if(!result){
        res.send('not found url')
    }

    next();
};

export default validateUrl;