import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindCoursePageRoutingModule } from './find-course-routing.module';

import { FindCoursePage } from './find-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindCoursePageRoutingModule
  ],
  declarations: [FindCoursePage]
})
export class FindCoursePageModule {}
