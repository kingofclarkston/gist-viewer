import { RequestHandler } from '@app/typings/request-handler';
import Github from '@app/domain/github/github';
import { query, validationResult } from 'express-validator';

export const getGists: RequestHandler = async (req, res, next) => {
    await query('userName', 'query param is missing')
        .isString()
        .run(req);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return next(errors);
    }

    const { userName } = <{userName:string}>req.query;

    const data = await Github.getGists(userName);
    res.json(data);
};

export const getGist: RequestHandler = async (req, res, next) => {
    const { id } = req.params;

    const data = await Github.getGist(id);
    res.json(data);
};
