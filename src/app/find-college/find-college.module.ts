import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindCollegePageRoutingModule } from './find-college-routing.module';

import { FindCollegePage } from './find-college.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindCollegePageRoutingModule
  ],
  declarations: [FindCollegePage]
})
export class FindCollegePageModule {}
