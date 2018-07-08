import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-qr',
  templateUrl: './generate-qr.component.html',
  styleUrls: ['./generate-qr.component.css']
})
export class GenerateQRComponent implements OnInit {
  public angularxQrCode: string = null;
  constructor() { }

  ngOnInit() {
  }

}
