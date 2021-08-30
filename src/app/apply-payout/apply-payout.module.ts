import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyPayoutPageRoutingModule } from './apply-payout-routing.module';

import { ApplyPayoutPage } from './apply-payout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyPayoutPageRoutingModule
  ],
  declarations: [ApplyPayoutPage]
})
export class ApplyPayoutPageModule {}
