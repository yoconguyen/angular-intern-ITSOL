import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormGroupDirective} from '@angular/forms';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-formbangcap',
  templateUrl: './formbangcap.component.html',
  styleUrls: ['./formbangcap.component.css']
})
export class FormbangcapComponent implements OnInit {

  states:string[]=[
        "pho thong",
        'cao dang',
        'dai hoc'
      ]
formbangcap!: FormGroup;
  constructor(private formall:FormComponent,
   private formdirective:FormGroupDirective
    ) { }

  ngOnInit(): void {
    this.formbangcap = this.formdirective.control;
  }

}
