import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ServieceService } from 'src/app/service/serviece.service';
import { sendDataDialog } from 'src/store/action';
import { selectDataDialogCheck } from 'src/store/select';
import { CheckboxLidoComponent } from '../checkbox-lido/checkbox-lido.component';

@Component({
  selector: 'app-popupadd',
  templateUrl: './popupadd.component.html',
  styleUrls: ['./popupadd.component.css']
})
export class PopupaddComponent implements OnInit {
  @ViewChild("inputcheck", { read: ElementRef }) inputcheck: ElementRef | undefined;
  arraychild:any=[]
  isCheckedType=false
  isCheckedsure=false
  isCheckTextbox=false
  isCheckedlido=false
  valueDescribe=""
  src = ""
  a = ["chọn đáp án", 'nhập text'];
  b:any = ["văn bản","checkbox", "radio", "text lí do", "checkbox lí do"];
  index = 0
  indexImg = 0
  index1 : number = 0
  valuefail = ""
  nameQuestion = ""
  value: string = '';
  typeQues: string = '';
  arrayCheckbox: Array<any> = [];
  objectCheckbox:any={}
  valueCheckbox = 'valueCheckbox';
  valueChange = "";
  isString(val: any): boolean { return typeof val === 'string'; };
  constructor(
    private dialogRef: MatDialogRef<PopupaddComponent>,
    private dialog: MatDialog,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data: any

    ) { }

  ngOnInit(): void {
    this.closeDialog()
this.getDatacheck()
  }
 closeDialog(){
  this.dialogRef.afterClosed().subscribe(()=>{
    console.log('aaaaaaaa')
    this.arrayCheckbox=[]
  this.arrayCheckOut=[]
  this.objectCheckbox={}
  })
 }
getDatacheck(){
 this.store.select(selectDataDialogCheck).subscribe((data)=>{
  if(data){
    console.log(data)
    
    console.log( this.arrayCheckbox)
    if(this.arrayCheckbox[data.index]){
      this.arrayCheckbox[data.index].inputChild=data?.dataChild
    }
    


  }
 })
}
g:any=0
  clickTextCheckbox() {

    this.arrayCheckbox.push(this.index++)
    let a=document.querySelector(".mat-dialog-content");
    this.g= a?.scrollHeight
        a?.scrollTo(0,this.g)


  }
  clickTextbox(){
 this.isCheckTextbox=true
  }
  // clickImg() {
  //   this.arrayImg.push(this.indexImg++)
  //   console.log(this.arrayImg);
  // }
 
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
  changeInputImg(e: any, i: any) {
    this.objectCheckbox={}
if(e.target.files[0].size < 2000000){
    if (e.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (e: any) => {
        this.src = e.target.result
        console.log(e)
        this.objectCheckbox.img=this.src
        this.arrayCheckbox[this.index1]
        if(typeof this.arrayCheckbox[this.index1] == "object"){
          this.arrayCheckbox[this.index1].img=this.src
          console.log(this.index1)
          console.log(this.arrayCheckbox)
        }
        else {this.arrayCheckbox[this.index1]= this.objectCheckbox}
        
      }  
    }
  } else console.log(e.target.files[0].size);
    
    
    
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

  arrayCheckOut:any=[]
  save() {
    this.arrayCheckbox.forEach((element: any) => {
      if (typeof element === "object") {
        this.arrayCheckOut.push(element)
      }
    });


    console.log(this.arrayCheckbox)
    this.store.dispatch({
      type: sendDataDialog,
      payload: { 
        name: this.nameQuestion, 
        mota:this.valueDescribe, 
        type: this.typeQues, 
        isCheckedType:this.isCheckedType,
        isCheckedsure:this.isCheckedsure,
        isCheckTextbox:this.isCheckTextbox,
        isCheckedlido:this.isCheckedlido,
        array: this.arrayCheckOut }
    })

    this.arrayCheckbox=[]
    this.arrayCheckOut=[]
    this.objectCheckbox={}
  }

  //check li do
  Updatelido(i:any){

  this.dialog.open(CheckboxLidoComponent,{
    width: "456px",
      height: "470px",
    data:{
      index:i,name:this.arrayCheckbox[i].input
    }
  })
  }
}
