import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoadingComponent } from '../dialog-loading/dialog-loading.component';
@Injectable({
  providedIn: 'root'
})
export class SeviceLoadingService {

  constructor( private dialogloading:MatDialog) { }
  public openDiaLogLoadig(){
    this.dialogloading.open(DialogLoadingComponent)
  }
  public closeDiaLogLoadig(){
    this.dialogloading.closeAll()
  }
}
