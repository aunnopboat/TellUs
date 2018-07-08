import { Component, OnInit } from '@angular/core';
import { AssessmentServiceService} from "./shared/assessment-service.service";

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css'],
  providers:[AssessmentServiceService]
})
export class AssessmentsComponent implements OnInit {

  constructor(private assessmentService : AssessmentServiceService) { }

  ngOnInit() {
  }

}
