import { Device } from './../../../models/device-model';
import { BriefDevice } from './../../../models/brief-device.model';

import { Observable } from 'rxjs';
import { DeviceService } from './../../../services/device.service';
import { Component, OnInit ,Input} from "@angular/core";

@Component({
  selector: "devices-list",
  template: `
      <div class="grid-container"  color="primary">
        <device-item *ngFor="let device of getBriefDetailsOfDevices()" [device]="device"></device-item>
      </div>
  `,
  styleUrls: ["./devices-list.component.css"]
})
        //<device-item *ngFor="let device of devices" [device]="device"></device-item>
export class DevicesListComponent implements OnInit {
  @Input() deviceList:Device[];

  constructor() {

  }

  ngOnInit() {
  }

  getBriefDetailsOfDevices():BriefDevice[]{
    return this.deviceList.map(device => {return {id:device.id, name: device.name}})
  }
}



/*
@Component({
  selector: "devices-list",
  template: `
      <div class="grid-container"  color="primary" *ngIf="getBriefDetailsOfDevices() | async; let briefDevices; else loading">
        <device-item *ngFor="let device of briefDevices" [device]="device"></device-item>
      </div>
      <ng-template #loading>Loading</ng-template>
  `,
  styleUrls: ["./devices-list.component.css"]
})
        //<device-item *ngFor="let device of devices" [device]="device"></device-item>
export class DevicesListComponent implements OnInit {
  @Input() deviceList:Observable<Device[]>;

  constructor() {

  }

  ngOnInit() {
  }

  getBriefDetailsOfDevices():Observable<BriefDevice[]>{

    return this.deviceList.map( devices => devices)
  }
}
 */
