import { Router } from "express";
import tvSeriesController from "../controllers/tv-series.controller";


class TvSeriesRouter {
    
    public router: Router = Router();
    
     
    constructor() {
        this.config();
        
    }

    private config(): void {
        this.router.get('/all', tvSeriesController.getAllTvSeries);
    } 

}


const tvSeriesRouter = new TvSeriesRouter();
export default tvSeriesRouter.router;