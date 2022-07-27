import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { from, map, observable, Observable, of, startWith } from 'rxjs';
import { ServieceService } from '../serviece.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  //   // form ca nhan
  //   formcanhan= new FormGroup({
  //     name: new FormControl("",[Validators.required]),
  //     email: new FormControl(),
  //   })
  //   // form bang cap
  //   formbangcap = new FormGroup({
  //     school: new FormControl(""),
  //     he: new FormControl("",[Validators.required]),
  //   })
  //   states:string[]=[
  //     "pho thong",
  //     'cao dang',
  //     'dai hoc'
  //   ]
  // // form gia dinhs
  //   formgiadinh= new FormGroup({
  //     sonha: new FormControl('',[Validators.required]),
  //     diachi: new FormControl('',[Validators.required]),
  //   })
  option = this.fb.group({
    canhan: this.fb.group({
      name: [],
      email: [],
    }),
    bangcap: this.fb.group({
      school: [],
      he: [],
    }),
    giadinh: this.fb.group({
      sonha: [],
      diachi: [],
    })
  })

  apifilter:any
api:any
apisearch:any
value=''


  constructor(private serviece: ServieceService,
    private fb: FormBuilder) { }
  ngOnInit(): void {
  this.getapi1()



  }
getapi1(){
 this.serviece.getapi().pipe(
    startWith("")
  ).subscribe(data=>{
    console.log('a:',data)
    this.apisearch=data
    this.api=data
  this.apifilter=data
  })

}

keyupsearch(){

    let apifilter=this.apifilter.filter((data:any)=>{
     return data.name.toLowerCase().includes(this.value.toLowerCase().trim())
    })
  
    if(this.value.length>=3)
    {
    this.apisearch=[]
    this.apisearch.push(...apifilter)
    }
    if(this.value=='')
    {
      this.apisearch=[]
    this.apisearch.push(...this.api)
    }
  
}


  onsubmit() {
    this.option.patchValue({
      canhan:{
      name: "hoang", 
      email: "hoang10x@ushd", },
      bangcap:{
      school: "HAUI", 
      he: "cao dang", },
      giadinh:{
      sonha: "02", 
      diachi: "xom cau"}
     })
  }
}
