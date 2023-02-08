
import axios from 'axios'
import { axiosInstance } from './axiosInstance';

export class BaseNetwork {

    async getAll(url: string) : Promise<any[]> {

        let responseData : any[] = [];
        await axiosInstance.get('' + url)
            .then(res => {
                responseData = res.data;
            })
            .catch(err => {
                throw err;
            })

        return responseData;

    }

}