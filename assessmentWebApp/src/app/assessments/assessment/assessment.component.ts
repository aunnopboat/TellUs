import { Component, OnInit } from '@angular/core';

import {AssessmentServiceService} from "../shared/assessment-service.service";
import {ToastrService} from "ngx-toastr";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  constructor(private assessmentService : AssessmentServiceService, private  tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(assessmentForm: NgForm){
    if(assessmentForm.value.$key == null)
      this.assessmentService.insertAssessment(assessmentForm.value);
    else
      this.assessmentService.updateAssessment(assessmentForm.value);
    this.resetForm(assessmentForm);
    this.tostr.success('Submitted Successfully', 'Assessment');
  }

  resetForm(assessmentForm?: NgForm){
    if(assessmentForm != null)
      assessmentForm.reset();
    this.assessmentService.selectedAssessment = {
      $key: null,
      name: '',
      date: '',
      number: 0,
    }
  }
  addQuestion(){

  }



}
