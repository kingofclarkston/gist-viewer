export default {
    logLevel: process.env.LOG_LEVEL || 'debug',
    port: parseInt(process.env.PORT || '4000', 10),
    githubUrl: process.env.GITHUB_URL,
};
