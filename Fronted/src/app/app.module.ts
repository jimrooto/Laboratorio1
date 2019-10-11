import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CategoriasAddComponent } from './components/categorias/categorias-add/categorias-add.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { CdkTableModule } from '@angular/cdk/table';
import { DoctoresComponent } from './components/doctores/doctores.component';
import { DoctoresAddComponent } from './components/doctores/doctores-add/doctores-add.component';
import { dataService } from './dataservice/data.service';
import { ExamenesComponent } from './components/examenes/examenes.component';
import { ExamenesAddComponent } from './components/examenes/examenes-add/examenes-add.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ModalModule } from 'ngb-modal';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MainComponent } from './main/main.component';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatTableModule, MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Ng2Rut } from 'ng2-rut';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { PacientesAddComponent } from './components/pacientes/pacientes-add/pacientes-add.component';
import { RegistroComponent } from './components/admin/registro/registro.component';
import { SharedModule } from './shared/shared.module';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { UserService } from './dataservice/login';
import { MaterialModule } from './material.module';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import  { AuthGuard, AuthService, AuthInterceptor } from './auth/auth.service';

import { LoginComponent } from './components/admin/login/login.component';
import { RegisterComponent } from './components/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    CategoriasAddComponent,
    DoctoresComponent,
    DoctoresAddComponent,
    ExamenesComponent,
    ExamenesAddComponent,
    LoginComponent,
    MainComponent,
    PacientesComponent,
    PacientesAddComponent,
    RegistroComponent,
    routedComponents,
    UsuariosComponent,
    RegisterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    NgxMatSelectSearchModule,
    CdkTableModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatAutocompleteModule,
    Ng2Rut,
    NgbPaginationModule, NgbAlertModule, NgbModule.forRoot(),
    MatTableModule,
    ModalModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule, MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    SharedModule, HttpClientModule, FormsModule,
  ],
  exports: [
    MatDatepickerModule,
  ],
  providers: [dataService, UserService, MatDatepickerModule,   CookieService, AuthService,AuthGuard , {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule { }
