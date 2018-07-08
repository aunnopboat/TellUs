import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AssessmentsComponent } from './assessments/assessments.component';
import { AssessmentComponent } from './assessments/assessment/assessment.component';
import { AssessmentListComponent } from './assessments/assessment-list/assessment-list.component';
import { FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MenuComponent} from "./menu/menu.component";
import { GenerateQRComponent } from './QRCode/generate-qr/generate-qr.component';
import { ScanQRComponent } from './QRCode/scan-qr/scan-qr.component';
import {QrcodeRoutingModule} from "./QRCode/qrcode-routing.module";
import {AssessmentRoutingModule} from "./assessments/assessment-routing.module";
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QRCodeModule } from 'angularx-qrcode';




@NgModule({
  declarations: [
    AppComponent,
    AssessmentsComponent,
    AssessmentComponent,
    AssessmentListComponent,
    MenuComponent,
    GenerateQRComponent,
    ScanQRComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    QrcodeRoutingModule,
    ZXingScannerModule.forRoot(),
    QRCodeModule,
    AssessmentRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
