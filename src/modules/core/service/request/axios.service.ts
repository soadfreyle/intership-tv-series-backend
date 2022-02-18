import axios from 'axios';

export class AxiosService {
    
        public getData (endpoint: string): Promise<any> {
        
        return new Promise<any>(async (resolve, reject) => {
            try {
                
                const response = await axios.get(endpoint);
                return resolve(response.data);
            } catch (e) {
                return reject(e);
            }
        });
    }
}

    /**
         * Importar axios
         * Recibir endpoint como parametro del metodo
         * utilizar axios.get para servicios get
         */