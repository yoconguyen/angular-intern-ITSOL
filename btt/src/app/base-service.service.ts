import {HttpClient, HttpHeaders} from '@angular/common/http';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
// import { HttpUtilsService } from '../core/_base/crud';
// import {AppConfig} from '../core/_config/app.page.config';

@Injectable()
export class BaseService {

  constructor (
    public httpClient: HttpClient,
    // public configService: AppConfig,
    // public httpUtils: HttpUtilsService
  ) {}

  get(url: string, params?: {}, responseType?: string): Observable<any> {
    switch (responseType) {
      case 'text':
        return this.httpClient.get(url, {
          params,
          responseType: 'text',
        });
      case 'blob':
        return this.httpClient.get(url, {
          headers: this.createHeaders() || {},
          params,
          responseType: 'blob',
        });
      default:
        return this.httpClient.get(url, {
          headers: this.createHeaders() || {},
          params
        });
    }
  }
  // , observe?: string, reportProgress?: boolean
  post(url: string, data: any, params?: {}, responseType?: string): Observable<any> {
    switch (responseType) {
      case 'text':
        return this.httpClient.post(url, data, {
          headers: this.createHeaders() || {},
          responseType: 'text',
          params
        });
      case 'blob':
        return this.httpClient.post(url, data, {
          headers: this.createHeaders() || {},
          responseType: 'blob',
          params
        });
      case 'download':
        return this.httpClient.post(url, data, {
        responseType: "blob",
        headers: new HttpHeaders().append("Content-Type", "application/json")
        });
      default:
        return this.httpClient.post(url, data, {
          headers: this.createHeaders() || {},
          params
        });
    }
  }

  put(url: string, data: any, responseType?: string): Observable<any> {
    switch (responseType) {
      case 'text':
        return this.httpClient.put(url, data, {
          headers: this.createHeaders() || {},
          responseType: 'text'
        });
      default:
        return this.httpClient.put(url, data, {
          headers: this.createHeaders() || {},
        });
    }
  }

  delete(url: string, id: any, responseType?: string): Observable<any> {
    switch (responseType) {
      case 'text':
        return this.httpClient.delete(url, {
          headers: this.createHeaders() || {},
          responseType: 'text'
        });
      default:
        return this.httpClient.delete(url, {
          headers: this.createHeaders() || {},
        });
    }
  }

  public createHeaders() {
    return new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.getToken())
  }

  private getToken() {

    // @ts-ignore
    return localStorage.getItem(token);
  }
}
