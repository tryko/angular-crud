import { Device } from "./../../../../models/device-model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "device-item",
  template: `
  <md-card class="card-container" color="primary">
      <md-card-title>{{device.name}}</md-card-title>
      <md-card-footer>
          <button md-raised-button color="primary" (click)="openDeviceDetails">Details</button>

      </md-card-footer>
    </md-card>
  `,
  styleUrls: ["./device-item.component.css"]
})
export class DeviceItemComponent implements OnInit {
  @Input() device;

  constructor() {}

  ngOnInit() {}
}
