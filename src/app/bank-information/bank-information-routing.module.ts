import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankInformationPage } from './bank-information.page';

const routes: Routes = [
  {
    path: '',
    component: BankInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankInformationPageRoutingModule {}
