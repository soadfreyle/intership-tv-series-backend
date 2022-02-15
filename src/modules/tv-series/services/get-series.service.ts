import { response } from "express";
import fetch from 'node-fetch-commonjs';

export class GetSeriesService { 

         public invoke = async () => {

            const baseUrl: any = 'https://run.mocky.io/v3/4d312654-2b59-4785-8db3-77acaeef3178';

            try {
                const response = await fetch(baseUrl);
                const data = await response.json();
                return data;
            } catch (error) {
                throw error;
                
            }
        }
    

}
