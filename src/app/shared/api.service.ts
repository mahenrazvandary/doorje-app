import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getProtectedApiResponse(): Observable<string> {
    return this.http.get<any>('https://api.doorje.io/')
      .pipe(
        //map(response => response.find((i: any) => i.type === 'iss').value),
        map(iss => iss.message + '   [ ' + iss.timestamp + ' ]'),
        catchError((e: HttpErrorResponse) => of(``)),
      );
  }
}
