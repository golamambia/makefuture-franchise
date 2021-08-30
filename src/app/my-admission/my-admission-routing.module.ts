import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAdmissionPage } from './my-admission.page';

const routes: Routes = [
  {
    path: '',
    component: MyAdmissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAdmissionPageRoutingModule {}
