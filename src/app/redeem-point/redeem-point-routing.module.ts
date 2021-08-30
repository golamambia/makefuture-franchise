import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemPointPage } from './redeem-point.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemPointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemPointPageRoutingModule {}
