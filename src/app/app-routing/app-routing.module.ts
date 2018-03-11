import { NgModule } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { ProvisionCreateComponent } from '../provision-create/provision-create.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ProvisionsComponent } from '../provisions/provisions.component';
import { ProvisionDetailComponent } from '../provision-detail/provision-detail.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { AllCustomersComponent } from '../customer/all-customers/all-customers.component';
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'fgtPassword', component: ForgotPasswordComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'dash', component: DashboardComponent },
      { path: 'provisions', component: ProvisionsComponent },
      { path: 'provisions/create', component: ProvisionCreateComponent },
      { path: 'provisions/:id', component: ProvisionDetailComponent },
      { path: 'customers', component: AllCustomersComponent },
      { path: '', redirectTo: 'dash', pathMatch: 'full' }
    ], canActivate: [AuthGuardService], data: { roles: ['customer', 'admin'], header: true }
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule {
}
