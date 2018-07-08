import {RouterModule, Routes} from "@angular/router";

import {NgModule} from "@angular/core";
import {AssessmentsComponent} from "./assessments.component";
import {AssessmentComponent} from "./assessment/assessment.component";

const assessementRoute: Routes = [
  {path: 'AssessmentList', component: AssessmentsComponent},
  {path: 'CreateAssessment', component: AssessmentComponent},
  {
    path: '',
    redirectTo: '/AssessmentList',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(assessementRoute)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AssessmentRoutingModule{

}
