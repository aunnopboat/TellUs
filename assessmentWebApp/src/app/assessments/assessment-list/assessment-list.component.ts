import { Component, OnInit } from '@angular/core';

import { Assessment} from "../shared/assessment.model";
import { AssessmentServiceService} from "../shared/assessment-service.service";
import { ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-assessment-list',
  templateUrl: './assessment-list.component.html',
  styleUrls: ['./assessment-list.component.css']
})
export class AssessmentListComponent implements OnInit {
  assessmentList: Assessment[];
  constructor(private assessmentService: AssessmentServiceService, private tostr: ToastrService) { }

  ngOnInit() {
    var x = this.assessmentService.getData();
    x.snapshotChanges().subscribe(item=>{
      this.assessmentList = [];
      item.forEach(element=> {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.assessmentList.push(y as Assessment);
      });
    });
  }

  onEdit(assessment: Assessment){
    this.assessmentService.selectedAssessment = Object.assign({}, assessment);
  }

  onDelete(key: string){
    if(confirm('Are you sure to delete this assessment?') == true){
      this.assessmentService.deleteAsessment(key);
      this.tostr.warning("Deleted Successfully" , "Assessment");
    }
  }

}
