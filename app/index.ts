import './bootstrap';
import app from './app';
import config from './config';
import logger from './lib/logger';

const { port } = config;

const startApp = async () => {
    app.listen(port, () => logger.info(`Server listening on port ${port}`))
        // eslint-disable-next-line no-console
        .on('warning', (e) => console.warn(e.stack))
        // eslint-disable-next-line no-console
        .on('error', (e) => console.error(e.stack));
};

startApp().catch((e) => {
    // eslint-disable-next-line no-console
    console.log(e);
    process.exit(1);
});
