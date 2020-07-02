import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin/admin.module';
import { FormComponent } from 'src/app/form/form.component';
import { MainComponent } from './main/main.component';
import { InfoEmpregadoComponent } from './info-empregado/info-empregado.component';

const routes: Routes = [
  {
    path: 'empregado/:id',
    component: InfoEmpregadoComponent
  },
  {
    path: '**',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, AdminModule]
})
export class AppRoutingModule { }
