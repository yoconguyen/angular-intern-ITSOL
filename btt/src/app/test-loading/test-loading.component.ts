import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, takeUntil } from 'rxjs';
import { ServieceService } from '../service/serviece.service';

@Component({
  selector: 'app-test-table',
  templateUrl: '../test-table/test-table.component.html',
  styleUrls: ['../test-table/test-table.component.css']
})
export class TestTableComponent implements OnInit,OnDestroy {
onInput($event: MouseEvent) {
throw new Error('Method not implemented.');
}

  displayedColumns: string[] = ['position','name','weight','symbol'];
  dataSource = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
 
  a=1
  load=false
img:any
sub = new Subject()
sub1 = new Subject()
  constructor(private servi:ServieceService) {

  }
  ngOnInit(): void {

  
  }

b:Observable<any>=interval(1)
  /** Whether the button toggle group contains the id as an active value. */
 clicktest(){
  let a= setInterval(()=>{
    if(this.load==false)
    {console.log(this.a=this.a+1)}},1)


 this.servi.getapipost().pipe(takeUntil(this.sub1)).subscribe((data)=>{
  this.load=true
  console.log(data);


})
  
}
closetest(){
  this.sub.next(console.log("aa"))
}
  changefile(e:any){
    console.log("aaaaaaaaa",e.srcElement.files[0].name)
    this.img=e.srcElement.files[0].name
  }
  ngOnDestroy() {
    this.sub.complete()
  }
}
