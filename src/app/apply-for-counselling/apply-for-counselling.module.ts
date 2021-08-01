import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyForCounsellingPageRoutingModule } from './apply-for-counselling-routing.module';

import { ApplyForCounsellingPage } from './apply-for-counselling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyForCounsellingPageRoutingModule
  ],
  declarations: [ApplyForCounsellingPage]
})
export class ApplyForCounsellingPageModule {}
