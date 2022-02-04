import { Response, Request } from 'express';

export interface ITvSeriesController {
    getAllTvSeries(req: Request, res: Response, next: any): Promise<any>;
}