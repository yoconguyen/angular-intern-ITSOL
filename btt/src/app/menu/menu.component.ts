import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval,observable,map } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild('ongbui') move!: ElementRef;
cols:any
rowheard="400px"
  constructor() { }
  dates:any=0;
  datep:any=0;
date:any=new Date().getTime()
  ngOnInit(): void {




    
  }
closeob(){
  let a=document.querySelector('.ongbut')
  a?.classList.toggle('move')
}
}
