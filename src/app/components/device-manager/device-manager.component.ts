import { Device } from './../../models/device-model';
import { Observable } from 'rxjs/Observable';
import { DeviceService } from './../../services/device.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'device-manager',
  template: `
    <div *ngIf="devices ; let deviceList; else loading">
      <devices-list [deviceList]="deviceList"></devices-list>
    </div>
    <ng-template #loading>Loading</ng-template>

  `,
  styleUrls: ['./device-manager.component.css']
})
export class DeviceManagerComponent implements OnInit {
  devices:Observable<Device[]>
  constructor(private deviceService:DeviceService) {
    this.devices = deviceService.getDeviceList();
   }

  ngOnInit() {
  }



}
