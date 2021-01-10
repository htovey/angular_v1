import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FetchService {

    constructor(private http: HttpClient) {}

    handleGet(url: string, userToken: string) {
        return this.http.get(
            url, 
            {   
                headers: {
                    "Content-Type" : "application/json",
                    "Accept" : "application/json",
                    "Authorization" : userToken
                },
                observe: "response"
            },        
        );
        //    return this.httpClient.get(this.REST_API_SERVER).pipe(catchError(this.handleError));

    }
    handlePost() {
        alert('POST!')
    }
}