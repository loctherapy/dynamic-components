import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  surveyForm: FormGroup;
  frameworks: string[] = ['Angular', 'React', 'Vue', 'Ember', 'Backbone', 'ExtJS', 'Other'];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.surveyForm = this.formBuilder.group({
      experienceInJSInYears: [0, [Validators.required]],
      experienceInDevInYears: [0, [Validators.required]],
      age: [0, [Validators.required]],
      favoriteFramework: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const survey = {
      experienceInJSInYears: this.surveyForm.controls['experienceInJSInYears'].value,
      experienceInDevInYears: this.surveyForm.controls['experienceInDevInYears'].value,
      age: this.surveyForm.controls['age'].value,
      favoriteFramework: this.surveyForm.controls['favoriteFramework'].value
    };

    console.log(survey);
  }

}
