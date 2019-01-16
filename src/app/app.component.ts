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
    // Just an emulation
    return Math.random() >= 0.5;
  }

  ngAfterContentInit() {
    // Check requirements to show the survey
    if (this.isSurveyRequired()) {
      // Resolve a factory
      const surveyFormFactory = this.resolver.resolveComponentFactory(SurveyComponent);
      // Create a component
      const component = this.entry.createComponent(surveyFormFactory);
    }
  }
}
