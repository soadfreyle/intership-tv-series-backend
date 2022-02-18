import { Request, Response } from 'express';
import {  TvSeriesManager } from '../managers/tv-series.manager';
import { ITvSeriesController } from './i-tv-series.controller';


export class TvSeriesController implements ITvSeriesController {

    public readonly tvSeriesManager: TvSeriesManager;

    constructor() {
        this.tvSeriesManager = new TvSeriesManager();
    }

    public async getAllTvSeries(req: Request, res: Response, next: any): Promise<any> {
        //console.info('Llego al controller');
        try {
            const response = await tvSeriesController.tvSeriesManager.getTvSeries();
            //console.info('response: ', response);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).send('Error' + error);
        }
    }

}

const tvSeriesController = new TvSeriesController();
export default tvSeriesController;
