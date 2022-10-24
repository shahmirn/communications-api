import cors from 'cors';
import express from 'express';
import logger from 'morgan';

import corsOptions from './config/cors.config';
import indexRouter from './routes/index';

var app = express();

app.use(logger('dev')); 
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

export default app;
