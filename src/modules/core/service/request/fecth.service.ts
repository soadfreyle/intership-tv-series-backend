import fetch from 'node-fetch-commonjs';

export class FetchService {

    public invoke (endpoint: string): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            try {
                const response = await fetch(endpoint);
                return resolve(response.json());
            } catch (e) {
                return reject(e);
            }
        });
    }
}
