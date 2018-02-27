import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerDashboardComponent} from '../customer-dashboard/customer-dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {ForgotPasswordComponent} from '../forgot-password/forgot-password.component';
import {ResetPasswordComponent} from '../reset-password/reset-password.component';
import {ProvisionCreateComponent} from '../provision-create/provision-create.component';
import {LoginComponent} from '../login/login.component';
import {AdminDashboardComponent} from '../admin-dashboard/admin-dashboard.component';
import {RegisterComponent} from '../register/register.component';
import {ProvisionsComponent} from '../customer-dashboard/provisions/provisions.component';
import {ProvisionDetailComponent} from '../customer-dashboard/provision-detail/provision-detail.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'fgtPassword', component: ForgotPasswordComponent},
  {path: 'resetPassword', component: ResetPasswordComponent},
  {
    path: 'cdash/:username', component: CustomerDashboardComponent, children: [
      {path: '', redirectTo: 'provisions', pathMatch: 'full'},
      {path: 'provisions', component: ProvisionsComponent},
      {path: 'provisions/:id', component: ProvisionDetailComponent}
    ]
  },
  {path: 'adash/:username', component: AdminDashboardComponent},
  {path: 'provision/create', component: ProvisionCreateComponent},
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
