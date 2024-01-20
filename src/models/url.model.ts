import { model, Schema, Document, Model }  from 'mongoose';

export interface IUrls extends Document {
    originalUrl: string;
    sortUrl: string;
    sortCode: string;
};

const UrlsSchema: Schema = new Schema<IUrls>({
    originalUrl: { type: Schema.Types.String, required: true },
    sortUrl: { type: Schema.Types.String, required: true },
    sortCode: { type: Schema.Types.String, required: true },
},{
    timestamps: true
});


/**
 * UNIQUE COMPOUND KEY
 */

UrlsSchema.index({sortCode : 1}, {unique : true});

const UrlsModel : Model<IUrls> = model<IUrls>('Url', UrlsSchema);

export default UrlsModel;