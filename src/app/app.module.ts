import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccountService} from './services/account.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {CustomerDashboardComponent} from './customer-dashboard/customer-dashboard.component';
import {ProvisionCreateComponent} from './provision-create/provision-create.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {mockAPIProvider} from './helpers/mock-service';
import {tokenProvider} from './helpers/token-interceptor';
import {HeaderComponent} from './header/header.component';
import {ProfileComponent} from './profile/profile.component';
import {ProvisionsComponent} from './customer-dashboard/provisions/provisions.component';
import {ProvisionService} from './services/provision.service';
import {ProvisionComponent} from './customer-dashboard/provision/provision.component';
import { SearchPipe } from './common/pipes/search.pipe';
import { ProvisionDetailComponent } from './customer-dashboard/provision-detail/provision-detail.component';
import { StatusWizardComponent } from './customer-dashboard/status-wizard/status-wizard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    AdminDashboardComponent,
    CustomerDashboardComponent,
    ProvisionCreateComponent,
    HeaderComponent,
    ProfileComponent,
    ProvisionsComponent,
    ProvisionComponent,
    SearchPipe,
    ProvisionDetailComponent,
    StatusWizardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AccountService, ProvisionService, tokenProvider, mockAPIProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
