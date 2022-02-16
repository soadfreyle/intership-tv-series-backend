import { FetchService } from '../../core/service/request/fecth.service';

const ENDPOINT = 'https://run.mocky.io/v3/4d312654-2b59-4785-8db3-77acaeef3178';

export class GetSeriesService {

    private readonly fetchService: FetchService;

    constructor() {
        this.fetchService = new FetchService();
    }

    public invokeSeriesService(): Promise<any> {
        return new Promise<any>( async (resolve, reject) => {
            try {
                const response = await this.fetchService.invoke(ENDPOINT);
                return resolve(response);
            } catch (e) {
                return reject(e);
            }
        });
    }
    
    /*
        Crear una nueva funcion invokeSerieService
        el contenido no va invocar la clas FecthService, si no el AxiosService
        
     */

}
