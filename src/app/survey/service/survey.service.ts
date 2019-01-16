import { Injectable } from '@angular/core';
import { ISurvey } from '../survey.interface';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor() { }

  add(survey: ISurvey) {
    console.log('Adding a survey...');
    console.log(survey);
  }
}
