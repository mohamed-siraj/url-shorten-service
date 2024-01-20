
import joi from 'joi';

const josSchema = joi.object({
    url : joi.string().required()
});

export default josSchema;