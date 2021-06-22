import { Request, Response, NextFunction } from 'express';

export type RequestHandler<T extends Request = Request, K extends Response = Response> = (
    req: T,
    res: K,
    next: NextFunction
) => void;
export type ErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => void;
export interface IRequest extends Request {}
export interface IResponse extends Response {}
