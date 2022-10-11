import { query } from '@angular/animations';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { debounceTime, delay, distinctUntilChanged,takeUntil, filter, fromEvent, interval, map, Observable, of, startWith, switchMap, tap, exhaustMap, timer, merge } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ServieceService } from '../service/serviece.service';
import { TestTableService } from '../test-table/test-table.service';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit ,OnDestroy{
  @ViewChild('searchInput')
  input!: ElementRef
  filteredStreets: any
  nameinput: any = ''
  bien: any = "toi la"
  dataname = ['HOANG', "HUNG", 'LINH']
  name = new FormControl('');
  test = new FormControl(this.bien)
subj:String="";
  constructor(

    private ro:Router,
    private serviece: ServieceService,
    private ser:TestTableService
  ) { 
    console.log('ChildComponent:OnDestroy');
  }
  array: any = [{a:"aaa",b:"bbb"},{a:"aaa11",b:"bbb22"}]
  data: any
  value: any = ""
  filter: any
  observalble: any
  ngOnInit(): void {
this.ser.subject$.subscribe(data=>{
  console.log(data);
  debugger
  this.subj=data})
    this.getapi1()
this.event()
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map((value: any) => {
console.log(value);

        return this._filter(value)
      }),
    );

  }

event(){
 this.array.push({a:"aaa33",b:"bbb32"})
 console.log(this.array)
}

  caretPos: number = 0;

  click(oField: any) {
    if (oField.selectionStart || oField.selectionStart == '0') {
      this.caretPos = oField.selectionStart;
    }

  }

   xoachuoi(e: any) {
    if (e.key == 'Backspace') {

      // if (this.test.value.includes(this.nameinput)&&this.test.value.slice(this.caretPos).length>this.caretPos <this.test.value.slice(0, this.caretPos).length) {
      //  let a=this.test.value.replace(this.nameinput,'')+' '
      //  this.test.setValue(a)
      // }
      console.log(this.test.value.search(' ' + this.dataname[1] + ' '))
      console.log(this.caretPos)

       if(this.test.value.includes(' '+this.dataname[0]+' ')&&this.caretPos>this.test.value.search(' '+this.dataname[0]+' ') && this.caretPos<=this.test.value.search(' '+this.dataname[0]+' ')+7){

        let a=this.test.value.replace(' '+this.dataname[0]+' ','')+' '
        this.test.setValue(a)
        this.caretPos=0
       }
      if (this.test.value.includes(' ' + this.dataname[1] + ' ') &&  this.caretPos>(this.test.value.search(' ' + this.dataname[1] + ' ')) && this.caretPos<=this.test.value.search(' ' + this.dataname[1] + ' ') + 6) {

        let b = this.test.value.replace(' ' + this.dataname[1] + ' ', '') + ' '
        this.test.setValue(b)
        this.caretPos=0

      }
      if (this.test.value.includes(' ' + this.dataname[2] + ' ') &&this.caretPos>this.test.value.search(' ' + this.dataname[2] + ' ') && this.caretPos<=this.test.value.search(' ' + this.dataname[2] + ' ') + 6) {

        let c = this.test.value.replace(' ' + this.dataname[2] + ' ', '') + ' '
        this.test.setValue(c)
        this.caretPos=0


      }

    }
  }
  clickmenu(name: any) {
    this.nameinput = ' ' + name + ' '

    let chuoi = this.test.value.slice(0, this.caretPos) + this.nameinput + this.test.value.slice(this.caretPos)
    this.test.setValue(chuoi)
  }
  getapi1() {
    this.serviece.getapi().pipe(
      debounceTime(2000),
      distinctUntilChanged(),
    ).subscribe(data => {
      this.data = data
      this.observalble = of(data)
    })
  }
  API = "http://localhost:3000/student";

  keyup() {
    this.observalble = []
    this.observalble = of(this.data).pipe(



      // switchMap(searchTerm => ajax(this.API)),
      map(data => {
        if (this.name.value.length >= 3) {
          this.filter = data.filter((b: any) => b.name.includes(this.name.value))
        }
        return this.filter


      }),

    )

  }

  control = new FormControl();
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  download() {
    this.serviece
      .download('https://picsum.photos/200/300/?random')
      .subscribe(blob => {
        const a = document.createElement('a')
        const objectUrl = URL.createObjectURL(blob)
        a.href = objectUrl
        a.download = 'archive.jpg';
        a.click();
        URL.revokeObjectURL(objectUrl);
      })
  }
a(){
  // let a=timer(5000)
  //   interval(1000).pipe(
  //    takeUntil(a)
  //   ).subscribe(data=>console.log(data))
  let a=true
  // merge(of(a=false).pipe(delay(3000)), of(a=true)).subscribe(data=>console.log(data));
  of('world').pipe(startWith(a=false)).subscribe(data=>{console.log(data)

  });
  console.log(a)
}
ngOnDestroy() {
  console.log('ChildComponent:OnDestroy');
}
}
