import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SurveyComponent } from './survey.component';

@NgModule({
  declarations: [
    SurveyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SurveyComponent
  ],
  entryComponents: [
    SurveyComponent
  ]
})
export class SurveyModule { }
