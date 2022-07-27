import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, MaxValidator } from '@angular/forms';
import { FormComponent } from '../form/form.component';
@Component({
  selector: 'app-formcanhan',
  templateUrl: './formcanhan.component.html',
  styleUrls: ['./formcanhan.component.css']
})
export class FormcanhanComponent implements OnInit {
formcanhan!:FormGroup
  constructor(private formall:FormComponent,
    private formdirective:FormGroupDirective) { }

  ngOnInit(): void {
this.formcanhan=this.formdirective.control
  }

}
