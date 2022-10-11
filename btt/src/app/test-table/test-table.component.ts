import { Component, OnDestroy, OnInit } from '@angular/core';
import { distinctUntilChanged, interval, Observable, Subject, takeUntil, throttleTime } from 'rxjs';
import { ServieceService } from '../service/serviece.service';
import { SeviceLoadingService } from '../service/sevice-loading.service';
import { DialogLoadingComponent } from '../dialog-loading/dialog-loading.component';
import { MatDialog } from '@angular/material/dialog';
import { TestTableService } from './test-table.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.css']
})
export class TestTableComponent implements OnInit,OnDestroy {
  constructor(private servi:ServieceService,
    private dialogloading:MatDialog,
    private serviceLoading:SeviceLoadingService,
    private ser:TestTableService,
    private router:Router
    ) {
        
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

  
  ngOnInit(): void {

  }

  onInput(event: Event) {
   this.ser.emitdata('aaaaaaa')
   this.router.navigateByUrl("/rxjs")
  }
b:Observable<any>=interval(1)
  /** Whether the button toggle group contains the id as an active value. */
 clicktest(){

 this.serviceLoading.openDiaLogLoadig()

 this.servi.getapipost().pipe().subscribe((data)=>{
  this.serviceLoading.closeDiaLogLoadig()

  console.log(data);


})
  
}
closetest(){
  this.dialogloading.open(DialogLoadingComponent)
}
  changefile(e:any){
    console.log("aaaaaaaaa",e.srcElement.files[0].name)
    this.img=e.srcElement.files[0].name
  }
  ngOnDestroy() {

  }
}
