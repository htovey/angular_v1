import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FetchService {

    constructor(private http: HttpClient) {}

    handleGet(url: string, userToken: string) {
        return this.http.get(
            url, 
            {   
                headers: {
                    "Content-Type":"application/json",
                    "Accept" :"application/json",
                    "Authorization": userToken
                },
                observe: 'response'
            },        
        ).toPromise();
    }
    handlePost() {
        alert('POST!')
    }
}