import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Assessment } from './assessment.model';

@Injectable({
  providedIn: 'root'
})
export class AssessmentServiceService {
  assessmentList: AngularFireList<any>;
  selectedAssessment: Assessment = new Assessment();

  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.assessmentList = this.firebase.list('assessments');
    return this.assessmentList;
  }

  insertAssessment(assessment : Assessment){
    this.assessmentList.push({
      name : assessment.name,
      date : assessment.date,
      number : assessment.number
    });
  }

  updateAssessment(assessment : Assessment){
    this.assessmentList.update(assessment.$key,
      {
        name : assessment.name,
        date : assessment.date,
        number : assessment.number

      });
  }

  deleteAsessment($key : string){
    this.assessmentList.remove($key);
  }
}
