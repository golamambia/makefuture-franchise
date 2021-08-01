import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollegeDetailsPage } from './college-details.page';

const routes: Routes = [
  {
    path: '',
    component: CollegeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollegeDetailsPageRoutingModule {}
