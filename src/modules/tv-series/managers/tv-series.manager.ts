import { GetSeriesService } from '../services/get-series.service';
import { ITvSeriesManager } from './i-tv-series.manager';

export class TvSeriesManager implements ITvSeriesManager {

    private readonly getSeriesService: GetSeriesService;

    constructor () {
        this.getSeriesService = new GetSeriesService();
    }

    public  getTvSeries(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const series = await this.getSeriesService.invokeSeriesService();
                //console.info('series: ', series);
                return resolve(series);
            } catch (e) {
                return reject(e);
            }
        });
    }

}
