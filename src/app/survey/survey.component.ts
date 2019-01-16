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
    console.log('Submitting...');
  }

}
