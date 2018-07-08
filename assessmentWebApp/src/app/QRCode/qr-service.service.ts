import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Assessment} from "../assessments/shared/assessment.model";
import {Qr} from "./qr";

@Injectable({
  providedIn: 'root'
})
export class QrServiceService {
  qrList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.qrList = this.firebase.list('qrcodes');
    return this.qrList;
  }
  useQr(qr : Qr){
    this.qrList.update(qr.$key,
      {
        isUsed : qr.isUsed = true,
      });
  }

}
