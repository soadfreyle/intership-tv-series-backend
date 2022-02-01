import { Router, Request, Response } from "express";


class IndexRouter {

    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    private config(): void {
        this.router.get('/health', (req: Request,res: Response) => {
            res.status(200);
            res.end('The App is running');
         });
    } 

}

const indexRouter = new IndexRouter();
export default indexRouter.router;