import {NgModule} from '@angular/core';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {ForgotPasswordComponent} from '../forgot-password/forgot-password.component';
import {ResetPasswordComponent} from '../reset-password/reset-password.component';
import {ProvisionCreateComponent} from '../provision-create/provision-create.component';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {ProvisionsComponent} from '../provisions/provisions.component';
import {ProvisionDetailComponent} from '../provision-detail/provision-detail.component';
import {AuthGuardService} from '../services/auth-guard.service';
import {AllCustomersComponent} from '../customer/all-customers/all-customers.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuardService], data: {roles: ['admin']}},
  {path: 'fgtPassword', component: ForgotPasswordComponent},
  {path: 'resetPassword', component: ResetPasswordComponent},
  {
    path: 'dash/:username', component: DashboardComponent, children: [
      {path: 'provisions', component: ProvisionsComponent},
      {path: 'provisions/detail/:id', component: ProvisionDetailComponent},
      {path: 'provisions/create', component: ProvisionCreateComponent},
      {path: 'customers', component: AllCustomersComponent},
      {path: '', redirectTo: 'provisions', pathMatch: 'full'}
    ], canActivate: [AuthGuardService], data: {roles: ['customer', 'admin']}
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'}
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
