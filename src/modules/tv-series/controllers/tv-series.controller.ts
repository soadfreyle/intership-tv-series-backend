import { ITvSeriesController } from './i-tv-series.controller';
import {  TvSeriesManager } from '../managers/tv-series.manager';
import { Response, Request } from 'express';


export class TvSeriesController implements ITvSeriesController {

    public readonly tvSeriesManager: TvSeriesManager;

    constructor() {
        this.tvSeriesManager = new TvSeriesManager();
    }

    public async getAllTvSeries(req: Request, res: Response, next: any): Promise<any> {
        
        try {
            const response = await tvSeriesController.tvSeriesManager.getTvSeries();
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).send('Error' + error);
        }
    }

}

const tvSeriesController = new TvSeriesController();
export default tvSeriesController;