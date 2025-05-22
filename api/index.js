import express from 'express';
import winston from 'winston';
import LokiTransport from 'winston-loki';

const app = express();
const port = 3000;

// Loki logger
const logger = winston.createLogger({
  transports: [
    new LokiTransport({
      host: 'http://loki:3100', // Loki service from Docker Compose
      labels: { job: 'node-api', env: 'dev' },
      json: true,
      interval: 5,
    }),
  ],
});

app.get('/', (req, res) => {
  logger.info('Hello World log triggered!');
  res.send('Logged to Grafana Loki!');
});

app.listen(port, () => {
  logger.info(`API running on port ${port}`);
});
