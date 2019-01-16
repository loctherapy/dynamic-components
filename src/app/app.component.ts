import { AfterContentInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { SurveyComponent } from './survey/survey.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  title = 'dynamic-components';

  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterContentInit() {
    const surveyFormFactory = this.resolver.resolveComponentFactory(SurveyComponent);
    const component = this.entry.createComponent(surveyFormFactory);
  }
}
