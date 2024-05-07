import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'

import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';

const app = express();
dotenv.config()
app.use(cors())
//its pkg of express but now its seprate
//ye json me return kreha post req ko

app.use(bodyParser.json({ extended: true }));
//ye remove kre ga extra space ko url se random no dega
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Router);

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


Connection(USERNAME, PASSWORD)
app.listen(PORT, ()=> console.log(`server is running successfull on PORT ${PORT}`));
DefaultData()