import express from 'express';
import routes from './routes/routes';

import cors from 'cors';

const port = 8000;

const app = express();
app.use(cors());


routes(app);
app.listen(port, () => console.log(`Server listening on port ${port}.`));