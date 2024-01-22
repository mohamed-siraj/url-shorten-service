import { TUrlRequest } from "../_types/request.type";
import shortString from "../lib/common";
import UrlsModel from "../models/url.model";
import crypto from 'crypto-js';

class UrlsController {

    async create(body: TUrlRequest) {

        const { url } = body;

        /**
         * generate sort url and sort code
         */

        const protocol = url.split('://')[0];
        const urlEncrypt = crypto.AES.encrypt(JSON.stringify(url.split('://')[1]), '123').toString();
        const sortUrl = shortString(10,urlEncrypt);
        const sortCode = shortString(10,urlEncrypt);

        const urlModel = new UrlsModel();
        urlModel.originalUrl = url;
        urlModel.sortUrl = `${protocol}://${sortUrl}`;
        urlModel.sortCode = sortCode;
        return await urlModel.save();

    };

    async get() {

        return await UrlsModel.find();
        
    };

    async delete(sortCode : string) {

        return await UrlsModel.deleteOne({sortCode : sortCode});
        
    };

    async redirect(sortUrl : string) {

        const result = await UrlsModel.findOne({sortUrl: sortUrl});
        return result?.originalUrl;
        
    };

};

export default UrlsController;