import { RequestHandler } from '@app/typings/request-handler';

const wrap = (fn: Function): RequestHandler => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

export default wrap;
