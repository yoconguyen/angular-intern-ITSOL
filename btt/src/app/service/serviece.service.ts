import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, filter, fromEvent, map, Observable, of, startWith, Subject, switchMap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ajax } from 'rxjs/ajax';
@Injectable({
  providedIn: 'root'
})
export class ServieceService {
b:any=[{a:"aaa",b:"bbb"},{a:"aaa11",b:"bbb22"}]
c:any
load=true

 subject:any = new Subject<number>();
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  private API = "http://localhost:3000/student";
  private API1 = "http://localhost:3000/post";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
 set(a:any): Observable<any>{
  this.c=a
 return this.c
 }
 get(): Observable<any>{
  console.log(this.c)
  return this.c
 }
  download(url: string): Observable<Blob> {
    return this.http.get(url, {
      responseType: 'blob'
    })
  }
  // private BE_SER = "services/sibcoaccountinfo/api/agent-management";

  // getListAgent(body:any) {
  //   return this.http.post(`${this.BE_SER}/getListAgent`, body);
  // }
  public getapipost(): Observable<any> {
    return this.http.get(this.API1)
   }
   public getload(): Observable<any> {
    return of(this.load).pipe(map(data=>data))
   }
 public getapi(): Observable<any> {
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
