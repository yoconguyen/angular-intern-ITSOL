import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServieceService } from '../serviece.service';
import { Route, Router } from '@angular/router';
import { ListdataComponent } from '../listdata/listdata.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { async } from '@angular/core/testing';
import { query } from '@angular/animations';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, OnChanges {
  //  @Input() data1stchill:any;
  //  @Output() dataOutput:EventEmitter<string>= new EventEmitter(); 

  formlist = new FormGroup({
    id: new FormControl(''),
    name: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    add: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')])
  })
  dataparser: any
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private serviece: ServieceService,
    private router: Router,
    private listdata: ListdataComponent
  ) { }

  ngOnInit(): void {
    // this.dialogRef.afterOpened().subscribe(data=>(
    //   console.log(data)
    // ))
    console.log(this.data)
    if (this.data != undefined) {
      this.formlist.setValue(this.data)
    }


  }
  ngOnChanges(): void {


  }



  themsv() {
    let data = {
      name: this.formlist.value.name,
      add: this.formlist.value.add,
      email: this.formlist.value.email,
      phone: this.formlist.value.phone
    }
    this.serviece.addstudent(data).subscribe(() => {
      this.dialogRef.close()
      this.listdata.callapi()
    })

  }

  // studentput: any = [];

  // suastudent(id: any) {
  //   this.serviece.get1student(id).then((data: any) => {
  //     this.studentput = data
  //     let a = {
  //       id: id,
  //       name: data.name,
  //       add: data.add
  //     }
  //     this.formlist.setValue(a)
  //   })
  // }

  suasv() {
    let data = {
      name: this.formlist.value.name,
      add: this.formlist.value.add,
      email: this.formlist.value.email,
      phone: this.formlist.value.phone
    }
    this.dataparser = data
    this.dialogRef.close(this.dataparser)

    // this.dataOutput.emit(this.dataparser);
    this.formlist.clearValidators
  }

}