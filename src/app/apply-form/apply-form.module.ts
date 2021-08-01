import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyFormPageRoutingModule } from './apply-form-routing.module';

import { ApplyFormPage } from './apply-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyFormPageRoutingModule
  ],
  declarations: [ApplyFormPage]
})
export class ApplyFormPageModule {}
