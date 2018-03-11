import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


import { ProvisionCreateComponent } from './provision-create/provision-create.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { mockAPIProvider } from './helpers/mock-service';
import { tokenProvider } from './helpers/token-interceptor';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { ProvisionsComponent } from './provisions/provisions.component';
import { ProvisionService } from './services/provision.service';
import { ProvisionComponent } from './provision/provision.component';
import { SearchPipe } from './common/pipes/search.pipe';
import { ProvisionDetailComponent } from './provision-detail/provision-detail.component';
import { StatusWizardComponent } from './status-wizard/status-wizard.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AddressPipe } from './common/pipes/address.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationPipe } from './common/pipes/pagination.pipe';
import { TitlecasePipe } from './common/pipes/titlecase.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllCustomersComponent } from './customer/all-customers/all-customers.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { HomeComponent } from './home/home.component';
import { StorageService } from './services/storage.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    ProvisionCreateComponent,
    HeaderComponent,
    ProfileComponent,
    ProvisionsComponent,
    ProvisionComponent,
    SearchPipe,
    ProvisionDetailComponent,
    StatusWizardComponent,
    AddressPipe,
    PaginationComponent,
    PaginationPipe,
    TitlecasePipe,
    AllCustomersComponent,
    CustomerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [AuthService,
    UserService,
    AuthGuardService,
    ProvisionService,
    tokenProvider,
    mockAPIProvider,
    PaginationPipe,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
