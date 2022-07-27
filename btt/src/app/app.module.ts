import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'form', component:FormComponent},
  {path: 'menu',component:MenuComponent},
  { path: 'listdata', component:ListdataComponent},
  { path: 'rxjs', component:RxjsComponent},

  { path: '',   redirectTo: '/login', pathMatch: 'full' }, 
];
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list'
import { sdtPipe } from './listdata/listdata.component';
import {MatTableModule} from '@angular/material/table'
import {MatDialogModule} from '@angular/material/dialog'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { ListdataComponent } from './listdata/listdata.component';
import { DialogComponent } from './dialog/dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { FormcanhanComponent } from './formcanhan/formcanhan.component';
import { FormbangcapComponent } from './formbangcap/formbangcap.component';
import { FormgiadinhComponent } from './formgiadinh/formgiadinh.component';
import { RxjsComponent } from './rxjs/rxjs.component';
@NgModule({
  declarations: [
    sdtPipe,
    AppComponent,
    FormComponent,
    LoginComponent,
    ListdataComponent,
    DialogComponent,
    MenuComponent,
    FormcanhanComponent,
    FormbangcapComponent,
    FormgiadinhComponent,
    RxjsComponent,
    
  ],
  imports: [
    MatAutocompleteModule,
    MatSelectModule,
    MatMenuModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgbModule,
  ],
  providers: [ListdataComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
