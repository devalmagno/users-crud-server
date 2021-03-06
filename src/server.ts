import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';
import { createConnection } from 'typeorm';
import cors from 'cors';

import { router } from './routes';

createConnection(); 

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

dotenv.config();

app.listen(3333, () => console.log('Server is runnning!'));