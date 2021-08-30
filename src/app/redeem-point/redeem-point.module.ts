import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemPointPageRoutingModule } from './redeem-point-routing.module';

import { RedeemPointPage } from './redeem-point.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemPointPageRoutingModule
  ],
  declarations: [RedeemPointPage]
})
export class RedeemPointPageModule {}
