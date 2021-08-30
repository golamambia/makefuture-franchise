import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyPayoutPage } from './apply-payout.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyPayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyPayoutPageRoutingModule {}
