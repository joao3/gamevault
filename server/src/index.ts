import express from 'express';
import cors from 'cors';
import routes from './routes/routes';

const port = 8000;

const app = express();
app.use(cors());

routes(app);
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}.`));
