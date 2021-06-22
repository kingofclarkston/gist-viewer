import winston from 'winston';
import config from '../config';

const { combine, timestamp } = winston.format;

const logger = winston.createLogger({
    level: config.logLevel,
    format: combine(timestamp(), winston.format.json()),
    transports: [
        new winston.transports.Console({
            handleExceptions: true,
        }),
    ],
});

export default logger;
