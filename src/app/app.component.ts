import { AfterContentInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { SurveyComponent } from './survey/components/survey.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {

  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  isSurveyRequired() {
    // emulating checking requirements to show the survey
    return Math.random() >= 0.5;
  }

  ngAfterContentInit() {
    if (this.isSurveyRequired()) {
      const surveyFormFactory = this.resolver.resolveComponentFactory(SurveyComponent);
      const component = this.entry.createComponent(surveyFormFactory);
    }
  }
}
