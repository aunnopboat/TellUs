import {RouterModule, Routes} from "@angular/router";
import {ScanQRComponent} from "./scan-qr/scan-qr.component";
import {GenerateQRComponent} from "./generate-qr/generate-qr.component";
import {NgModule} from "@angular/core";

const qrcodeRoute: Routes = [
  {path: 'scan-qr', component: ScanQRComponent},
  {path: 'generate-qr', component: GenerateQRComponent},
];
@NgModule({
  imports: [
    RouterModule.forRoot(qrcodeRoute)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class QrcodeRoutingModule{

}
