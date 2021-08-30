import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyOfferPageRoutingModule } from './my-offer-routing.module';

import { MyOfferPage } from './my-offer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyOfferPageRoutingModule
  ],
  declarations: [MyOfferPage]
})
export class MyOfferPageModule {}
