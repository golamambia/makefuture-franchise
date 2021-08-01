import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurServicePageRoutingModule } from './our-service-routing.module';

import { OurServicePage } from './our-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurServicePageRoutingModule
  ],
  declarations: [OurServicePage]
})
export class OurServicePageModule {}
