import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAdmissionPageRoutingModule } from './my-admission-routing.module';

import { MyAdmissionPage } from './my-admission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAdmissionPageRoutingModule
  ],
  declarations: [MyAdmissionPage]
})
export class MyAdmissionPageModule {}
