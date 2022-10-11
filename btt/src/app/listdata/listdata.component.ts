import { Component, OnChanges, OnInit, Pipe, PipeTransform, SimpleChanges } from '@angular/core';
import { ServieceService } from '../service/serviece.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { interval, map, observable, Observable, of, startWith } from 'rxjs';


@Component({
  selector: 'app-listdata',
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.css']
})
export class ListdataComponent implements OnInit, OnChanges {
  student: any = []
  time = new Observable<string>((observer) => {
    setInterval(() => observer.next( Date()), 1000);

  });
  

  number = ""
  date = new Date
  a:any
  timeout1=new Observable(observa=>{
    setInterval(()=>{observa.next(Date())},1000)
  })
  displayedColumns: string[] = ['id', 'name', 'weight', 'email', 'phone', 'action'];
   timeout():Observable<any>{
      
     return of(this.timeout1)
   
  }

  constructor(


    public dialog1: MatDialog,
    private serviece: ServieceService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.timeout().subscribe((a)=>{ console.log(a)})
    this.callapi()
    interval(1000).subscribe(a=>{this.a=Date()
    })

   let a= of('hello word').pipe(
    startWith("abc"),
    
     ).subscribe(data=>{
       console.log(data)
     })
     console.log()
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
  callapi() {
    this.serviece.getapi().subscribe(data=>this.student=data)
  }

  deletestudent(id: any) {
    this.serviece.deletestudent(id).subscribe(() => {
      this.callapi()
    })

  }

  dataput: any = {}
  dialog() {
    const dialogRef = this.dialog1.open(DialogComponent, {
      data: this.dataparser
    });
    dialogRef.afterClosed().subscribe(result => {
      // this.serviece.putstudent(this.dataparser.id,result)
      this.dataput = result
      if (this.dataput != null) {
        this.sua()
      }
      this.callapi()

    });

  }
  async sua() {
    await this.serviece.putstudent(this.dataparser.id, this.dataput)
    await this.callapi()
  }


  dataparser: any

  suastudent(id: any) {
    this.serviece.get1student(id).then((data: any) => {
      let a = {
        id: id,
        name: data.name,
        add: data.add,
        email: data.email,
        phone: data.phone
      }
      this.dataparser = a;
      this.dialog()

    })

  }
  // async suasinhvien(data: any) {
  //   await this.dialog()
  //   await this.serviece.putstudent(this.dataparser.id, data)
  //   await this.callapi()
  // }
  currentRate = 3.14;
}
@Pipe({ name: 'sdt' })
export class sdtPipe implements PipeTransform {
  transform(
    number: string,

  ) {
    if (number[0] == '0') {
      return number.replace('0', '+84')
    } else return number

    // return number?number+pipe:""
  }

}

