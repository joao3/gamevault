import express from 'express';
import routes from './routes/routes';

const port = 8000;

const app = express();
routes(app);
app.listen(port, () => console.log(`Server listening on port ${port}.`))

export default app;