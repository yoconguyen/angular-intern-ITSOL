import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestTableService {
 subject$= new EventEmitter<string>();
  constructor() { }
  emitdata(data:any){
    this.subject$.emit(data)
  }
}
