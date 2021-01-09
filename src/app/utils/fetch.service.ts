import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export class FetchService {

    constructor(private http: HttpClient) {}

    handleGet(url: string, userToken: string) {
        return this.http.get(
            url, 
            {   
                headers: {
                    "Content-Type":"application/json",
                    "Accept" :"application/json",
                    "Authorization": userToken,
                    "Connection": "close"
                },
                observe: 'body'
            },        
        ).toPromise();
    }
    handlePost() {
        alert('POST!')
    }
}