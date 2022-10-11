import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { selectDataDialogChill } from 'src/store/select';
import { ServieceService } from '../service/serviece.service';
import { PopupaddComponent } from './popupadd/popupadd.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  isString(val: any): boolean { return typeof val === 'string'; };

  src = ''
  arrayQuestionCheckbox: any = []
  arrayOut: any = []
  arrayFake: any = []
  constructor(
    public dialog: MatDialog,
    private store: Store,
    private service: ServieceService
  ) { }

  ngOnInit(): void {
    this.dataDialog()
    this.check()

    this.arrayQuestionCheckbox = [
      {
        "name": "cau hoi 1",
        "mota": "",
        "type": "checkbox",
        "isCheckedType": false,
        "isCheckedsure": false,
        "isCheckTextbox": false,
        "isCheckedlido": false,
        "array": [
          {
            "input": "cau tra loi 1"
          },
          {
            "input": "cau tra loi 2"
          },
          {
            "input": ""
          }
        ]
      },
      {
        "name": "",
        "mota": "",
        "type": "checkbox",
        "isCheckedType": false,
        "isCheckedsure": true,
        "isCheckTextbox": false,
        "isCheckedlido": false,
        "array": [
          {
            "input": "cau tra loi1"
          },
          {
            "input": "cau tra loi 2"
          }
        ]
      },
      {
        "name": "",
        "mota": "",
        "type": "checkbox lí do",
        "isCheckedType": true,
        "isCheckedsure": true,
        "isCheckTextbox": false,
        "isCheckedlido": false,
        "array": [
          {
            "input": "tra loi 1",
            "inputChild": {
              "type": "checkbox",
              "isCheckedsure": true,
              "isCheckTextbox": false,
              "data": [
                {
                  "input": "li do 1 of 1"
                },
                {
                  "input": "li do 2 of 1"
                }
              ]
            }
          },
          {
            "input": "tra loi 2",
            "inputChild": {
              "type": "radio",
              "isCheckedsure": false,
              "isCheckTextbox": false,
              "data": [
                {
                  "input": "li do 1 of 2"
                },
                {
                  "input": "li do 2 of 2"
                }
              ]
            }
          }
        ]
      },
      {
        "name": "",
        "mota": "",
        "type": "checkbox lí do",
        "isCheckedType": false,
        "isCheckedsure": false,
        "isCheckTextbox": false,
        "isCheckedlido": false,
        "array": [
          {
            "input": "tl 1",
            "inputChild": {
              "type": "radio",
              "isCheckedsure": false,
              "isCheckTextbox": false,
              "data": [
                {
                  "input": "li do 1 of 1"
                },
                {
                  "input": "li do 2 of 1"
                }
              ]
            }
          },
          {
            "input": "tl 2",
            "inputChild": {
              "type": "checkbox",
              "isCheckedsure": true,
              "isCheckTextbox": false,
              "data": [
                {
                  "input": "li do 1 of 2"
                },
                {
                  "input": "li do 2 of 2"
                }
              ]
            }
          }
        ]
      }
    ];

    this.arrayOut = this.arrayQuestionCheckbox.map((data: any) => {

      return {
        data: [],
        isCheckTextbox: data.isCheckTextbox,
        isCheckedType: data.isCheckedType,
        isCheckedlido: data.isCheckedlido,
        isCheckedsure: data.isCheckedsure,
        mota: data.mota,
        name: data.name,
        type: data.type
      }
    }
    )
  }
  check() {



  }
  dataDialog() {
    this.store.select(selectDataDialogChill).subscribe((data) => {
      if (data) {
        this.arrayQuestionCheckbox.push(data)
        this.arrayFake = this.arrayQuestionCheckbox;
        this.arrayOut = this.arrayQuestionCheckbox





      }
    })
  }

  deleteQues(i: any) {
    this.arrayQuestionCheckbox.splice(i, 1)

  }
  copyQues(i: any) {
    let a: object = { ...this.arrayQuestionCheckbox[i] }
    this.arrayQuestionCheckbox.splice(i, 0, a)
  }
  openDialogQues() {
    this.dialog.open(PopupaddComponent, {
      width: "456px",
      height: "632px",
      data: {
        length: this.arrayQuestionCheckbox.length
      }
    }

    );

  }
  changfile(e: any) {
    if (e.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (e: any) => {
        this.src = e.target.result
      }
      console.log(e);

    }
  }

  // test phieu khao sat
  arraycautl: any = []
  // checkbox
  changeCheckbox(e: any, i: any, item: any, ichilren: any) {

    if (e.checked) {
      this.arrayOut[i].data.push(item)
    } else {
      let a = this.arrayOut[i].data.filter((data: any) => data !== item)
      this.arrayOut[i].data = a
    }
    console.log(this.arrayOut);
  }
  changeCheckboxkhac(e: any, i: any) {
    if (e.checked) {
      this.arrayOut[i].data.push({ input: 'Khác' })

    } else {
      let a = this.arrayOut[i].data.filter((data: any) => data.input !== 'Khác')
      this.arrayOut[i].data = a
    }
    console.log(this.arrayOut);

    // if( changeCheckboxicon.checked){
    //   if(this.arrayOut[i]?.data[0]?.type=="khac")
    //   {
    //     if(dom.value.trim()=='')
    //     {
    //       this.arrayOut[i].data.shift()
    //     }else{
    //     this.arrayOut[i].data.shift()
    //   this.arrayOut[i].data.unshift({input:dom.value.trimStart(),type:"khac"})
    //     }
    //   } else this.arrayOut[i].data.unshift({input:dom.value.trimStart(),type:"khac"});
    // }else {
    //   if(this.arrayOut[i]?.data[0]?.type=="khac")
    //   {
    //     this.arrayOut[i].data.shift()
    //   }
    // }
    // console.log(this.arrayOut);

  }
  // radio
  changeRadio(e: any, i: any, item: any, ichilren: any) {
    console.log(i);

    this.arrayOut[i].data.shift()
    this.arrayOut[i].data.push(item)

    console.log(this.arrayOut);
  }
  changeCheckradiokhac(e: any, i: any) {


    this.arrayOut[i].data.shift()
    this.arrayOut[i].data.unshift({ input: 'Khác' })

    // console.log(changeCheckradioicon );
    // if(changeCheckradioicon.checked){
    //     this.arrayOut[i].data.shift()
    //   this.arrayOut[i].data.unshift({input:dom.value.trimStart(),type:"khac"})
    // }

    console.log(this.arrayOut);
  }
  // van ban
  changeText(e: any, i: any) {

    this.arrayOut[i].data.shift()
    this.arrayOut[i].data.push({ input: e.target.value })
    console.log(this.arrayOut);

  }
  // checktextlido
  changeTextlido(e: any, i: any, item: any, dom: any, textlido: any, ichilren: any) {
    //  console.log(textlido.checked);
    //  console.log(item);
    //  console.log(dom.value);
    if (textlido.checked) {

      // this.arrayOut[i].data.push({ input: item.input, img: item.img ? item.img : '', lido: dom.value })

      let arr = this.arrayOut[i].data.filter((element: any) => {
        return element?.input != item?.input
      });

      this.arrayOut[i].data = arr
      this.arrayOut[i].data.push({ input: item.input, img: item.img ? item.img : '', lido: dom.value })


    } else {
      let a = this.arrayOut[i].data.filter((data: any) => data.input !== item.input)
      this.arrayOut[i].data = a

    }
    console.log(this.arrayOut);

  }
  changeTextlidokhac(i: any, dom: any, textlido: any) {
    if (textlido.checked) {

      this.arrayOut[i].data.unshift({ input: 'Khác', lido: dom.value })
      let arr = this.arrayOut[i].data.filter((element: any) => {
        return element?.input != 'Khác'
      });

      this.arrayOut[i].data = arr
      this.arrayOut[i].data.push({ input: 'Khác', lido: dom.value })
    } else {
      let a = this.arrayOut[i].data.filter((data: any) => data.input !== 'Khác')
      this.arrayOut[i].data = a
    }
    console.log(this.arrayOut);


  }
  // radio lido
  changeTextlidoRadio(event: any, i: any, item: any, textlidoradio: any, dom: any) {

    if (textlidoradio.checked) {
      this.arrayOut[i].data.shift()
      this.arrayOut[i].data.push({ input: item.input, img: item.img ? item.img : '', lido: dom.value })
    }

    console.log(this.arrayOut);
  }
  changeTextradiolidokhac(i: any, dom: any, checkradio: any) {
    if (checkradio.checked) {
      this.arrayOut[i].data.shift()
      this.arrayOut[i].data.push({ input: 'Khác', lido: dom.value })
      console.log(this.arrayOut);

    }
  }
  // check li do
  form: FormGroup = new FormGroup({
    items: new FormControl(null)
  });

  changeChecklido(e: any, i: any, item: any, textlido: any, ichid: any) {

    if (e.checked) {
      this.arrayOut[i].data.push({ input: item.input, img: item.img ? item.img : '', dataChild: [] })
    } else {
      // this.form.reset()
      let a = this.arrayOut[i].data.filter((data: any) => data.input !== item.input)
      this.arrayOut[i].data = a


    }
    console.log(this.arrayOut);

  }
  // check lido khac
  changeCheckboxlidokhac(e: any, i: any) {
    if (e.checked) {
      this.arrayOut[i].data.push({ input: 'Khác' })

    } else {
      let a = this.arrayOut[i].data.filter((data: any) => data.input !== 'Khác')
      this.arrayOut[i].data = a
    }
    console.log(this.arrayOut);
  }
  // check lido chid

  checkboxchild(e: any, i: any, ichid: any, item: any, item2: any, check: any, checkcha: any) {
    // console.log(item2.input);
    // check.checked=true

    if (check.checked) {

      let arr = this.arrayOut[i].data.filter((element: any) => {
        return element?.input == item?.input
      });
      if (arr[0] == undefined) {
        this.arrayOut[i].data.push({ input: item.input, img: item.img ? item.img : '', dataChild: [item2] })
      }
      else {
        arr[0].dataChild.push(item2)
      }
    } else {
      let a = this.arrayOut[i].data.filter((data: any) => data.input == item.input)
      let b = a[0].dataChild.filter((data: any) => data.input != item2.input)
      a[0].dataChild = b
    }
    console.log(this.arrayOut);

  }

  // check li do child khac
  changechecklidokhac(i: any, item: any, check: any) {
    if (check.checked) {
      let arr = this.arrayOut[i].data.filter((element: any) => {
        return element?.input == item?.input
      })
      if (arr[0] == undefined) {
        this.arrayOut[i].data.push({ input: item.input, img: item.img ? item.img : '', dataChild: [{ input: 'Khác' }] })
      } else {
        arr[0].dataChild.push({ input: 'Khác' })
      }
    } else {
      let a = this.arrayOut[i].data.filter((data: any) => data.input == item.input)
      let b = a[0].dataChild.filter((data: any) => data.input != 'Khác')
      a[0].dataChild = b
    }
    console.log(this.arrayOut);
  }
  // radio child of check box
  radioboxchild(i: any, item: any, item2: any, check: any) {
    let arr = this.arrayOut[i].data.filter((element: any) => {
      return element?.input == item?.input
    });
    if (arr[0] == undefined) {
      this.arrayOut[i].data.push({ input: item.input, img: item.img ? item.img : '', dataChild: [item2] })
    }
    else {
      arr[0].dataChild = [item2]
    }
    console.log(this.arrayOut);

  }
  // radio khac child of check box
  radioboxchildkhac(i: any, item: any, check: any) {
    let arr = this.arrayOut[i].data.filter((element: any) => {
      return element?.input == item?.input
    })
    if (arr[0] == undefined) {
      this.arrayOut[i].data.push({ input: item.input, img: item.img ? item.img : '', dataChild: [{ input: 'Khác' }] })
    } else {
      arr[0].dataChild = [{ input: 'Khác' }]
    }
  }

  //  li do radio 
  changeradiolido(e: any, i: any, item: any, check: any) {
    this.arrayOut[i].data.shift()
    this.arrayOut[i].data.push({ input: item.input, img: item.img ? item.img : '', dataChild: [] })


    // this.arrayOut[i].data.push(item)

    console.log(this.arrayOut);
  }
  // li do khac radio
  radioboxkhac(i: any, item: any, check: any) {
    this.arrayOut[i].data.shift()
    this.arrayOut[i].data.push({ input: "Khác", img: item.img ? item.img : '', dataChild: [] })
    console.log(this.arrayOut);

  }
  // checkbox child of radio
  radioboxchildbox(e: any, i: any, item: any, item2: any, check: any) {
    if (check.checked) {

      let arr = this.arrayOut[i].data.filter((element: any) => {
        return element?.input == item?.input
      });
      if (arr[0] == undefined) {
        this.arrayOut[i].data.shift()
        this.arrayOut[i].data.push({ input: item.input, img: item.img ? item.img : '', dataChild: [item2] })
      }
      else {

        arr[0].dataChild.push(item2)
      }
    } else {
      let a = this.arrayOut[i].data.filter((data: any) => data.input == item.input)
      let b = a[0].dataChild.filter((data: any) => data.input != item2.input)
      a[0].dataChild = b
    }
    console.log(this.arrayOut);

  }
  // checkbox child of radio khac
  changeRadioboxlidokhac(e: any, i: any, item: any, check: any) {
    if (check.checked) {
      let arr = this.arrayOut[i].data.filter((element: any) => {
        return element?.input == item?.input
      })
      if (arr[0] == undefined) {
        this.arrayOut[i].data.shift()
        this.arrayOut[i].data.push({ input: item.input, img: item.img ? item.img : '', dataChild: [{ input: 'Khác' }] })
      } else {
        arr[0].dataChild.push({ input: 'Khác' })
      }
    } else {
      let a = this.arrayOut[i].data.filter((data: any) => data.input == item.input)
      let b = a[0].dataChild.filter((data: any) => data.input != 'Khác')
      a[0].dataChild = b
    }
    console.log(this.arrayOut);
  }
  radiolidoboxchildOfRadio(i: any, item: any, item2: any, check: any) {
    let arr = this.arrayOut[i].data.filter((element: any) => {
      return element?.input == item?.input
    });
    if (arr[0] == undefined) {
      this.arrayOut[i].data.shift()
      this.arrayOut[i].data.push({ input: item.input, img: item.img ? item.img : '', dataChild: [item2] })
    }
    else {
      arr[0].dataChild = [item2]
    }
    console.log(this.arrayOut);
  }
  // khac radio child Of radio
  radioboxchildkhacOfRadio(i: any, item: any, check: any) {
    let arr = this.arrayOut[i].data.filter((element: any) => {
      return element?.input == item?.input
    })
    if (arr[0] == undefined) {
      this.arrayOut[i].data.shift()
      this.arrayOut[i].data.push({ input: item.input, img: item.img ? item.img : '', dataChild: [{ input: 'Khác' }] })
    } else {
      arr[0].dataChild = [{ input: 'Khác' }];
    }
    console.log(this.arrayOut);

  }
checkwarning=false
  clickhoanthanh() {
    console.log('array all:',  this.arrayQuestionCheckbox);
    // this.arrayFake.forEach((element: any) => {
    //   this.arrayOut.forEach((data: any) => {


    //     if (element.isCheckedsure == true && data.data.length == 0) {
    //       console.log('1','sai');
          

    //     } 
    //   })
    // });

// validate 1
let filter1 = this.arrayFake.map((data:any,i:any)=>{
  return {
    isCheckedsure:data.isCheckedsure,
    index:i
  }
})
let b1=filter1.filter((data:any)=>{
  return data.isCheckedsure==true
})
console.log(b1);
    let arr=b1.map((element:any) => {
     let a= this.arrayOut.map((data:any)=>{
      return {
        data:data.data
      }
      })
      return {
        data:a[element.index]
      }
    });
 arr.forEach((element:any) => {
  if(element.data.data.length==0){
console.log('vui long nhap dap an');

  }
 });
// validate 2
let filter2 = this.arrayFake.map((data:any,i:any)=>{
  return {
    isCheckedlido:data.isCheckedlido,
    index:i
  }
})
let b2=filter2.filter((data:any)=>{
  return data.isCheckedlido==true
})
let arr1=b2.map((element:any) => {
  let a= this.arrayOut.map((data:any)=>{
   return {
     data:data.data
   }
   })
   return {
     data:a[element.index]
   }
 });
 console.log(arr1);
 arr1.forEach((element:any) => {
  if(element.data.data.length!=0){
 element.data.data.forEach((element:any) => {
  if(element.lido==''){
    console.log("vui long nhap li do");
    
  }
 });

  }
  
 });
 // validate 3
 let filter3 = this.arrayFake.map((data:any,i:any)=>{
  // let a=data.array.map((data:any)=>{
  //   return {
  //     inputChild:data.inputChild
  //   }
  // })
  // console.log(a);
  
  return {
    arr:data.array,
    index:i
  }
})

console.log(filter3);
let b3=filter3.filter((data:any)=>{
 let a= data.arr.map((element:any) => {
    return{
      input:element.input,
      isCheckedsure:element.inputChild?.isCheckedsure

    }
  });
  console.log(a);
  
  return a.isCheckedsure==true
})
console.log(b3);



    // this.arrayFake.forEach((element: any) => {
    //   this.arrayOut.forEach((data: any) => {
    //     data.data.forEach((datachild: any) => {
    //       if (element.isCheckedlido == true && datachild.input!=undefined && datachild.lido == '') {
    //         console.log('2','sai');


    //       } else {
    //         console.log('2','dung');


    //       }
    //     });

    //   });

    // })



    // this.arrayFake.forEach((element: any) => {
    //   element.array.forEach((elementchid: any) => {
    //     this.arrayOut.forEach((data: any) => {
    //       data.data.forEach((datachild: any) => {

            
    //         if (elementchid?.inputChild?.isCheckedsure == true && datachild?.dataChild?.length == 0) {
    //           console.log('3','sai');


    //         } else {
    //           console.log('3','dung');

    //         }
    //       });
    //     })






    //   });

    // })
    console.log(this.arrayOut);
console.log('aaaaa',this.checkwarning);

  }

}

