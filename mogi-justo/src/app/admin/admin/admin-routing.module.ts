import { LoginAdminComponent } from 'src/app/admin/admin/login-admin/login-admin.component';
import { AdminIndexComponent } from 'src/app/admin/admin/admin-index/admin-index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'login',
        component: LoginAdminComponent
      },
      {
        path: 'home',
        component: AdminIndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
