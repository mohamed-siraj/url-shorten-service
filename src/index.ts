import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes';

// config env
dotenv.config();

//express server instance
const app = express();

//connected body parser middleware
app.use(bodyParser.json())

/**
 * routes connect
 */
app.use(routes);

/**
 * database connection
 */
mongoose.connect(`${process.env.DB_URL}`).then(() => {
    console.log('database connected');
}).catch(() => {
    console.log('database connection lost');
})
/**
 * server start 
 */
app.listen(process.env.PORT, () => {
    console.log(`server starting with this ${process.env.PORT} port`);
});