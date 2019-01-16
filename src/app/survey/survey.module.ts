import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SurveyComponent } from './components/survey.component';
import {SurveyService} from './service/survey.service';

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
  providers: [
    SurveyService
  ],
  entryComponents: [
    SurveyComponent
  ]
})
export class SurveyModule { }
