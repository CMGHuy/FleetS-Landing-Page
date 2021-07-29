import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpResponse} from '@angular/common/http';
import { FltResponse } from '../models/fltresponse.model';
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  backendUrl:string = '/v1/lp/uploadJsonTest';
  httpOptions = {
    //headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }),
    responseType: 'json' as const,
    observe: 'events' as const,
    params: {} as any
  }
  constructor(private http: HttpClient) {}
  upload(data,token:string) {
    this.httpOptions.params = {token: token};
    return this.http.post<FltResponse>(this.backendUrl, data, this.httpOptions);
  }
}
