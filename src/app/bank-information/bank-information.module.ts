import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankInformationPageRoutingModule } from './bank-information-routing.module';

import { BankInformationPage } from './bank-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankInformationPageRoutingModule
  ],
  declarations: [BankInformationPage]
})
export class BankInformationPageModule {}
