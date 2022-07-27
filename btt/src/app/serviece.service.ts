import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, filter, fromEvent, map, Observable, startWith, switchMap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ajax } from 'rxjs/ajax';
@Injectable({
  providedIn: 'root'
})
export class ServieceService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  private API = "http://localhost:3000/student";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  download(url: string): Observable<Blob> {
    return this.http.get(url, {
      responseType: 'blob'
    })
  }

  getapi(): Observable<any> {
    return this.http.get(this.API)
    .pipe(
      startWith("")
    )
      // .pipe(
      //   map(data => { 
      //     console.log('api:',data)

      //     return data }),
     
      //   catchError((err) => {
      //     this.router.navigateByUrl('/login')

      //     //Handle the error here

      //     return err    //Rethrow it back to component
      //   })
      // )
  }

  public addstudent(data: any): Observable<any> {
    return this.http.post(this.API, data, this.httpOptions)
      .pipe(
        catchError((err) => {
          this.router.navigateByUrl('/login')

          //Handle the error here

          return err    //Rethrow it back to component
        })
      )
  }

  public deletestudent(id: any): Observable<any> {
    return this.http
      .delete(this.API + "/" + id, this.httpOptions)
      .pipe(
        catchError((err) => {
          this.router.navigateByUrl('/login')

          //Handle the error here

          return err    //Rethrow it back to component
        })
      )
  }

  public get1student(id: any) {
    return fetch(this.API + '/' + id)
      .then(response => response.json())
  }
  public putstudent(id: any, data: any) {
    return fetch(this.API + '/' + id, {
      method: 'PUT', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }
}
