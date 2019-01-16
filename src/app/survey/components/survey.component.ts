import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Framework } from '../framework/framework.enum';
import { SurveyService } from '../service/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  surveyForm: FormGroup;
  frameworks: Framework[] = [
    Framework.ANGULAR,
    Framework.REACT,
    Framework.VUE,
    Framework.BACKBONE,
    Framework.EMBER,
    Framework.EXTJS,
    Framework.OTHER
  ];

  constructor(
    private formBuilder: FormBuilder,
    private surveySurvice: SurveyService
  ) { }

  ngOnInit() {
    this.surveyForm = this.formBuilder.group({
      experienceInJSInYears: [0, [Validators.required]],
      experienceInDevInYears: [0, [Validators.required]],
      age: [0, [Validators.required]],
      favoriteFramework: [Framework.ANGULAR, [Validators.required]]
    });
  }

  onSubmit() {
    const survey = {
      experienceInJSInYears: this.surveyForm.controls['experienceInJSInYears'].value,
      experienceInDevInYears: this.surveyForm.controls['experienceInDevInYears'].value,
      age: this.surveyForm.controls['age'].value,
      favoriteFramework: this.surveyForm.controls['favoriteFramework'].value
    };

    this.surveySurvice.add(survey);
  }

}
