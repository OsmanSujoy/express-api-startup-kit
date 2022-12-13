import express from 'express';
import logger from './utility/logger';

const app = express();
const port = 4000;
app.get('/', (_, res) => {
  res.status(200).send('Ok');
});
app.listen(port, () => logger.info(`Running on port ${port}`));
