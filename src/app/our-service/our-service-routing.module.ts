import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurServicePage } from './our-service.page';

const routes: Routes = [
  {
    path: '',
    component: OurServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurServicePageRoutingModule {}
