import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyAuthorizationPageRoutingModule } from './apply-authorization-routing.module';

import { ApplyAuthorizationPage } from './apply-authorization.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyAuthorizationPageRoutingModule
  ],
  declarations: [ApplyAuthorizationPage]
})
export class ApplyAuthorizationPageModule {}
