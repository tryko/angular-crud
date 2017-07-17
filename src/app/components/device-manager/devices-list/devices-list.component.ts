import { MdDialog, MdDialogRef } from "@angular/material";

import { Device } from "./../../../models/device-model";
import { BriefDevice } from "./../../../models/brief-device.model";

import { Observable } from "rxjs";
import { DeviceService } from "./../../../services/device.service";
import { Component, OnInit, Input } from "@angular/core";
import { UpperCasePipe } from "@angular/common";

import * as _ from "lodash";

@Component({
  selector: "devices-list",
  template: `
      <div class="grid-container"  color="primary">
        {{deviceID}}
        <device-item *ngFor="let device of getBriefDetailsOfDevices()" [device]="device" (showDeviceDetails)="showDeviceDetails($event)"></device-item>
      </div>
  `,
  styleUrls: ["./devices-list.component.css"]
})
export //<device-item *ngFor="let device of devices" [device]="device"></device-item>
class DevicesListComponent implements OnInit {
  @Input() deviceList: Device[];

  constructor(public dialog: MdDialog) {}

  ngOnInit() {}

  getBriefDetailsOfDevices(): BriefDevice[] {
    return this.deviceList.map(device => {
      return { id: device.id, name: device.name };
    });
  }

  showDeviceDetails(deviceID) {
    const clonedDevice = _.cloneDeep(this.deviceList[+deviceID]);
    let dialogRef = this.dialog.open(deviceDetails);
    dialogRef.componentInstance.device = clonedDevice;
  }
}

@Component({
  selector: "dialog-overview-example-dialog",
  templateUrl: "device-details-dialog.html"
})
export class deviceDetails {
  public device:Device;
  constructor(public dialogRef: MdDialogRef<deviceDetails>) {}


}
