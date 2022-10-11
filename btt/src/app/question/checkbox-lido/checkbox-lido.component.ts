import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { sendDataDialogCheckbox } from 'src/store/action';

@Component({
  selector: 'app-checkbox-lido',
  templateUrl: './checkbox-lido.component.html',
  styleUrls: ['./checkbox-lido.component.css']
})
export class CheckboxLidoComponent implements OnInit {
  isCheckTextbox=false
  isCheckedsure=false
  array: any = [];
  object:any={}
  src = ""
  index = 0
  indexImg = 0
  index1 : number = 0
  valuefail = ""
  nameQuestion = ""
  value: string = '';
  value1: string = '';
  arrayCheckbox: Array<any> = [];
  objectCheckbox:any={}
  valueCheckbox = 'valueCheckbox';
  valueChange = "";
  isString(val: any): boolean { return typeof val === 'string'; };
  constructor(
    private dialogRef: MatDialogRef<CheckboxLidoComponent>,
    private dialog: MatDialog,
    private store :Store,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

b=["checkbox","radio"]
  ngOnInit(): void {
    
    this.closeDialog()
  }
  closeDialog(){
    this.dialogRef.afterClosed().subscribe(()=>{
      this.array=[]
     this.object={}
     this.arrayCheckbox=[]
  this.objectCheckbox={}   
     })
  }
  clickTextbox(){
    this.isCheckTextbox=true
  }
  clickTextCheckbox() {

    this.arrayCheckbox.push(this.index++)
  

  }
 
  deleteInput(i: any) {
    this.arrayCheckbox.splice(i, 1)
   console.log(this.arrayCheckbox);
   

  }
  nhanInput(i: any) {
    let a:object={...this.arrayCheckbox[i]}
    this.arrayCheckbox.splice(i, 0, a)
    console.log(this.arrayCheckbox);
    
  }
  a1(i: any) {
    this.index1 = i
    console.log(this.index1);
    
  }

  changeInput(e: any, i: any) {
    this.objectCheckbox={}
    this.objectCheckbox.input=e.target.value
    if(typeof this.arrayCheckbox[i] == "object"){
      this.arrayCheckbox[i].input=e.target.value
    }
    else

    this.arrayCheckbox[i]= this.objectCheckbox
    console.log(this.arrayCheckbox)


  }

  save(){

   
   this.object={}
    this.arrayCheckbox.forEach((element: any) => {
      if (typeof element === "object") {
        this.array.push(element)
        this.object.type=this.value
        this.object.isCheckedsure=this.isCheckedsure
        this.object.isCheckTextbox=this.isCheckTextbox
        this.object.data= this.array
      }
    });
    console.log(this.object)
    this.store.dispatch(
      {
        type:sendDataDialogCheckbox,
        payload:{dataChild:this.object,index:this.data.index}
      }
    )
    this.array=[]
   this.object={}
   this.arrayCheckbox=[]
this.objectCheckbox={}
  }
}
