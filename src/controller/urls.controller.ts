import { TUrlRequest } from "../_types/request.type";
import makeSortUrl from "../lib/common";
import UrlsModel from "../models/url.model";


class UrlsController {

    async create(body: TUrlRequest) {

        const { url } = body;

        /**
         * generate sort url and sort code
         */
        const sortUrl = `${makeSortUrl(10, url.split('//')[1]).replace('/', '').replace('/.', '').replace('.', '')}`;
        const sortCode = makeSortUrl(10, url.split('//')[1]).replace('/', '').replace('/.', '').replace('.', '');

        const urlModel = new UrlsModel();
        urlModel.originalUrl = url;
        urlModel.sortUrl = sortUrl;
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