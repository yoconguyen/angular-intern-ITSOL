import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'question', component:QuestionComponent ,canActivate:[AuthGuard]},

  { path: 'form', component:FormComponent,canActivate:[AuthGuard]},
  {path: 'menu',component:MenuComponent,canActivate:[AuthGuard]},
  { path: 'listdata', component:ListdataComponent,canActivate:[AuthGuard]},
  { path: 'rxjs', component:RxjsComponent},
  { path: 'testtable', component:TestTableComponent,canActivate:[AuthGuard]},
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
import { TestTableComponent } from './test-table/test-table.component';
import { DialogLoadingComponent } from './dialog-loading/dialog-loading.component';
import { TestTableService } from './test-table/test-table.service';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { QuestionComponent } from './question/question.component';
import { PopupaddComponent } from './question/popupadd/popupadd.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { StoreModule } from '@ngrx/store';
import { postreducer } from 'src/store/reduce';
import {MatRadioModule} from '@angular/material/radio';
import { AuthGuard } from './auth.guard';
import { CheckboxLidoComponent } from './question/checkbox-lido/checkbox-lido.component';

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
    TestTableComponent,
    DialogLoadingComponent,
    QuestionComponent,
    PopupaddComponent,
    CheckboxLidoComponent,
  
    
  ],
  imports: [
    MatRadioModule,
    StoreModule.forRoot({posts:postreducer}),
    MatCheckboxModule,
    MatSlideToggleModule,
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
    MatProgressSpinnerModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
  ],
  providers: [ListdataComponent,TestTableService],
  bootstrap: [AppComponent,DialogLoadingComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}