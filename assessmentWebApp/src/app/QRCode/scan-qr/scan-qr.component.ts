import {Component, OnInit, VERSION, ViewChild} from '@angular/core';

import { ZXingScannerComponent } from '@zxing/ngx-scanner';

import { Result } from '@zxing/library';
import {Qr} from "../qr";
import {ToastrService} from "ngx-toastr";
import {QrServiceService} from "../qr-service.service";
import {Assessment} from "../../assessments/shared/assessment.model";


@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.component.html',
  styleUrls: ['./scan-qr.component.css']
})
export class ScanQRComponent implements OnInit {

  constructor(private qrService : QrServiceService, private  tostr: ToastrService) { }
  ngVersion = VERSION.full;

  @ViewChild('scanner')

  scanner: ZXingScannerComponent;

  hasCameras = false;
  hasPermission: boolean;
  qrResultString: string;

  availableDevices: MediaDeviceInfo[];
  selectedDevice: MediaDeviceInfo;
  qrList: Qr[];
  ngOnInit(): void {
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasCameras = true;

      console.log('Devices: ', devices);
      this.availableDevices = devices;

      var x = this.qrService.getData();
      x.snapshotChanges().subscribe(item=>{
        this.qrList = [];
        item.forEach(element=> {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.qrList.push(y as Qr);
        });
      });

      // selects the devices's back camera by default
      // for (const device of devices) {
      //     if (/back|rear|environment/gi.test(device.label)) {
      //         this.scanner.changeDevice(device);
      //         this.selectedDevice = device;
      //         break;
      //     }
      // }
    });

    this.scanner.camerasNotFound.subscribe((devices: MediaDeviceInfo[]) => {
      console.error('An error has occurred when trying to enumerate your video-stream-enabled devices.');
    });

    this.scanner.permissionResponse.subscribe((answer: boolean) => {
      this.hasPermission = answer;
    });

  }

  handleQrCodeResult(resultString: string) {
    console.log('Result: ', resultString);
    this.qrResultString = resultString;
    this.checkisUsed();
  }

  onDeviceSelectChange(selectedValue: string) {
    console.log('Selection changed: ', selectedValue);
    this.selectedDevice = this.scanner.getDeviceById(selectedValue);
  }

  checkisUsed() {
    for (let i = 0; i < this.qrList.length; i++) {
      if(this.qrResultString == this.qrList[i].stringcode && this.qrList[i].isUsed == false){
        this.qrService.useQr(this.qrList[i]);
        this.tostr.warning("Scan Success!!" , "QR code");
      } else {this.tostr.warning("This QR code has been used!!" , "QR code"); }
    }
  }
}
