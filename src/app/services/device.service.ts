import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";

import { Device } from "./../models/device-model";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch'

@Injectable()
export class DeviceService {
  devices: Device;

  constructor(private http:Http) {}

  getDeviceList():Observable<Device[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })
        return this.http.get("http://localhost:3000/devices")
                .map(res => this.extractData(res))
                .catch(err => this.handleError(err));
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    console.log('body', body);
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = error.message || 'Server error';
    console.error('error in service.handelError', errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
