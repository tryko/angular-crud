import { HttpModule } from "@angular/http";
import { DeviceService } from "./services/device.service";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { MaterialModule } from "@angular/material";

import { AppComponent } from "./app.component";
import { DevicesListComponent } from "./components/device-manager/devices-list/devices-list.component";
import { DeviceItemComponent } from "./components/device-manager/devices-list/device-item/device-item.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DeviceManagerComponent } from "./components/device-manager/device-manager.component";

@NgModule({
  declarations: [
    AppComponent,
    DevicesListComponent,
    DeviceItemComponent,
    NavbarComponent,
    DeviceManagerComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, HttpModule],
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
