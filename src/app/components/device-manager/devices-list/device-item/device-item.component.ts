import { BriefDevice } from "./../../../../models/brief-device.model";
import { Component, OnInit, Input,EventEmitter,Output } from "@angular/core";

@Component({
  selector: "device-item",
  template: `
  <md-card class="card-container" color="primary">
      <md-card-title>{{device.name | titlecase}}</md-card-title>
      <md-card-footer>
          <button md-raised-button color="primary" (click)="deviceDetails()">Details</button>

      </md-card-footer>
    </md-card>
  `,
  styleUrls: ["./device-item.component.css"]
})
export class DeviceItemComponent implements OnInit {
  @Input() device:BriefDevice;

  @Output() showDeviceDetails:EventEmitter<any> = new EventEmitter()

  constructor() {}

  ngOnInit() {}

  deviceDetails(){
    this.showDeviceDetails.emit(this.device.id)
  }
}
