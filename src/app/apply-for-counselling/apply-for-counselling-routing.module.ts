import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyForCounsellingPage } from './apply-for-counselling.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyForCounsellingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyForCounsellingPageRoutingModule {}
