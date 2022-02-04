import { ITvSeriesManager } from './i-tv-series.manager';
import { GetSeriesService } from '../services/get-series.service';

export class TvSeriesManager implements ITvSeriesManager {

    private readonly getSeriesService: GetSeriesService;

    constructor () {
        this.getSeriesService = new GetSeriesService();
    }

    public  getTvSeries(): Promise<any> {
        return new Promise(async (resolve, reject) => {

            try {
                const series = this.getSeriesService.invoke();
                return resolve(series);
            } catch (e) {
                return reject(e);
            }

        });
    }

}