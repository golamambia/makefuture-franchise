import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyOfferPage } from './my-offer.page';

const routes: Routes = [
  {
    path: '',
    component: MyOfferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyOfferPageRoutingModule {}
