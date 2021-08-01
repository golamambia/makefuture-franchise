import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindCollegePage } from './find-college.page';

const routes: Routes = [
  {
    path: '',
    component: FindCollegePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindCollegePageRoutingModule {}
