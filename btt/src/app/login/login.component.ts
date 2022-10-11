import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hoang='1';
  hide=true;
  formgrouplogin = new FormGroup({
    taikhoan: new FormControl('', [Validators.required, Validators.email]),
    matkhau: new FormControl('', [Validators.required]),
  })
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.formgrouplogin.value.taikhoan.hasError('required')) {
      return 'Email is required';
    }
  
    return this.formgrouplogin.value.taikhoan.hasError('email') ? 'Email must be a valid email address' : '';
  }
  getErrorMessage2() {
    if (this.formgrouplogin.value.matkhau.hasError('required')) {
      return 'Password is required';
    }
  
    return this.formgrouplogin.value.matkhau.hasError('email') ? 'Email must be a valid email address' : '';
  }

  onSubmit(){
    this.router.navigateByUrl('/listdata');
  }
  hoangTest(){
    console.log("jxhkajsdkj")
  }
}
