import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable()
export class DialogflowService {

  private baseURL = 'https://api.dialogflow.com/v1/query?v=20150910';
  private token: string = environment.token;

  constructor(private http: HttpClient) {}

  public getResponse(query: string) {
    const data = {
      query : query,
      lang: 'en',
      sessionId: '12345'
    };
    // const headers: HttpHeaders = new HttpHeaders();
    // headers.append('Authorization', `Bearer ${this.token}`);
    const headers = { 'Authorization': `Bearer ${this.token}` }
    return this.http.post(`${this.baseURL}`, data, {headers}).pipe(map((res: any) => {
        return res;
      }));
  }

}
