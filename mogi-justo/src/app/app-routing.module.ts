import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin/admin.module';
import { FormComponent } from 'src/app/form/form.component';

const routes: Routes = [
  {
    path: '**',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, AdminModule]
})
export class AppRoutingModule { }
