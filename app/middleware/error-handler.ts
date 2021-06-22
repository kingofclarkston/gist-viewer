import { RequestHandler, ErrorHandler } from '@app/typings/request-handler';
import logger from '@app/lib/logger';

export const notFound: RequestHandler = (req, res) => {
    logger.error('404 Unknown Url', { path: req.path });
    res.status(404).send({ error: 'Unknown URL' });
};

export const unexpected: ErrorHandler = (err, req, res, next) => {
    logger.error('Error', { path: req.path, err });
    if (res.headersSent) {
        return next(err);
    }

    if (err.errors) {
        return res.status(400).json(err.errors);
    }

    const status = err.status || 500;
    let message = err.message || err;

    if (status === 500) {
        logger.error(err);
    }

    return res.status(status).send({ error: message });
};
