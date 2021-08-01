import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollegeDetailsPageRoutingModule } from './college-details-routing.module';

import { CollegeDetailsPage } from './college-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollegeDetailsPageRoutingModule
  ],
  declarations: [CollegeDetailsPage]
})
export class CollegeDetailsPageModule {}
