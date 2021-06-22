import Path from 'path';
import express from 'express';
import routes from './routes';
import * as errorHandler from './middleware/error-handler';

const root = process.cwd();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use(express.static(Path.resolve(root, 'static')));

app.use(errorHandler.notFound);
app.use(errorHandler.unexpected);

export default app;
