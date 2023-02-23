import express, { NextFunction, Request, Response } from 'express';
import routes from './routes/routes';

const cors = require("cors");

const port = 8000;

const app = express();
app.use(cors());


routes(app);
app.listen(port, () => console.log(`Server listening on port ${port}.`));