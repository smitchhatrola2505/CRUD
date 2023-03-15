import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar' ;
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SingupComponent } from './component/singup/singup.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogForCancelButtonComponent } from './dialog/dialog-for-cancel-button/dialog-for-cancel-button.component';
import { DialogSubmitButtonComponent } from './dialog/dialog-submit-button/dialog-submit-button.component';
import { DialogSubmitValidateComponent } from './dialog/dialog-submit-validate/dialog-submit-validate.component';
import { HttpClientModule } from '@angular/common/http';
import { DataComponent } from './component/data/data.component';
import { DialogSubmitServerErrorComponent } from './dialog/dialog-submit-server-error/dialog-submit-server-error.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoginDialogAlertComponent } from './dialog/login-dialog-alert/login-dialog-alert.component';
import { DuplicatedataDialogComponent } from './dialog/duplicatedata-dialog/duplicatedata-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SingupComponent,
    DialogForCancelButtonComponent,
    DialogSubmitButtonComponent,
    DialogSubmitValidateComponent,
    DataComponent,
    DialogSubmitServerErrorComponent,
    LoginDialogAlertComponent,
    DuplicatedataDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FormsModule,
    MatSortModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatPseudoCheckboxModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,   
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatPseudoCheckboxModule,
    MatInputModule,
    MatIconModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
