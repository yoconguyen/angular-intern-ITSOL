import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { FormComponent } from '../form/form.component';
@Component({
  selector: 'app-formgiadinh',
  templateUrl: './formgiadinh.component.html',
  styleUrls: ['./formgiadinh.component.css']
})
export class FormgiadinhComponent implements OnInit {
formgiadinh!:FormGroup
  constructor(private formall:FormComponent,
    private formdirective:FormGroupDirective) { }

  ngOnInit(): void {
    this.formgiadinh=this.formdirective.control
  }

}
