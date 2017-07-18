import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";

import { Device } from "./../models/device-model";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch'

@Injectable()
export class DeviceService {
  devices: Device;
  hardCodedData: any =  [
    {
      "id": 0,
      "name": "device N",
      "series": 1530,
      "phases": [
        {
          "phase-name": "third phase"
        },
        {
          "phase-name": "first phase",
          "technician": "Ms. Candice Sporer",
          "comment": "Dolores accusamus voluptas voluptatum ducimus perspiciatis non autem recusandae.",
          "capacity": "92 mbps"
        }
      ]
    },
    {
      "id": 1,
      "name": "device I",
      "series": 1948,
      "phases": [
        {
          "phase-name": "third phase",
          "capacity": "914 mbps"
        }
      ]
    },
    {
      "id": 2,
      "name": "device J",
      "series": 1782,
      "phases": [
        {
          "phase-name": "third phase",
          "technician": "Lesly Nikolaus"
        }
      ]
    },
    {
      "id": 3,
      "name": "device Y",
      "series": 1696,
      "phases": [
        {
          "phase-name": "fourth phase",
          "capacity": "565 mbps"
        },
        {
          "phase-name": "second phase",
          "technician": "Ryley Oberbrunner"
        }
      ]
    },
    {
      "id": 4,
      "name": "device L",
      "series": 1880,
      "phases": [
        {
          "phase-name": "third phase",
          "technician": "Miss Simone Nader"
        }
      ]
    },
    {
      "id": 5,
      "name": "device M",
      "series": 1866,
      "phases": [
        {
          "phase-name": "first phase",
          "technician": "Madelynn D'Amore III"
        }
      ]
    },
    {
      "id": 6,
      "name": "device N",
      "series": 1759,
      "phases": [
        {
          "phase-name": "second phase",
          "comment": "Dolore hic maxime qui vitae quaerat minima.",
          "capacity": "235 mbps"
        },
        {
          "phase-name": "first phase",
          "comment": "Magni dolore at quam sed rerum voluptatem facere fuga praesentium."
        },
        {
          "phase-name": "fourth phase",
          "technician": "Allan Friesen",
          "capacity": "620 mbps"
        }
      ]
    },
    {
      "id": 7,
      "name": "device E",
      "series": 1775,
      "phases": [
        {
          "phase-name": "third phase",
          "comment": "Iure molestiae fuga ipsa magnam quia ut et."
        }
      ]
    },
    {
      "id": 8,
      "name": "device X",
      "series": 1604,
      "phases": [
        {
          "phase-name": "first phase",
          "technician": "Keegan Hahn",
          "comment": "Iusto et fuga in quisquam fuga officia rem et."
        }
      ]
    },
    {
      "id": 9,
      "name": "device J",
      "series": 1776,
      "phases": [
        {
          "phase-name": "fourth phase"
        },
        {
          "phase-name": "third phase",
          "technician": "Jeremie Smitham"
        },
        {
          "phase-name": "third phase",
          "comment": "Doloribus voluptate sapiente eius laborum autem temporibus.",
          "capacity": "515 mbps"
        },
        {
          "phase-name": "second phase",
          "comment": "Animi perspiciatis maiores quaerat recusandae eos sit nobis recusandae ullam."
        }
      ]
    },
    {
      "id": 10,
      "name": "device H",
      "series": 1960,
      "phases": [
        {
          "phase-name": "first phase",
          "comment": "Rerum corrupti error rerum consequatur ut vel delectus.",
          "capacity": "50 mbps"
        }
      ]
    },
    {
      "id": 11,
      "name": "device S",
      "series": 1847,
      "phases": [
        {
          "phase-name": "third phase",
          "technician": "Rosie Windler DDS",
          "capacity": "163 mbps"
        },
        {
          "phase-name": "fourth phase"
        },
        {
          "phase-name": "second phase",
          "capacity": "225 mbps"
        },
        {
          "phase-name": "first phase",
          "technician": "Barney Stoltenberg"
        }
      ]
    },
    {
      "id": 12,
      "name": "device F",
      "series": 1839,
      "phases": [
        {
          "phase-name": "second phase",
          "comment": "Rerum amet ut id tenetur itaque ut esse est voluptatem."
        },
        {
          "phase-name": "first phase",
          "technician": "Gust Okuneva",
          "capacity": "428 mbps"
        },
        {
          "phase-name": "second phase",
          "technician": "Rosa Kirlin",
          "comment": "Animi dicta et ipsa aut distinctio voluptatibus."
        }
      ]
    },
    {
      "id": 13,
      "name": "device Q",
      "series": 2002,
      "phases": [
        {
          "phase-name": "second phase",
          "comment": "Quo qui aperiam similique est amet.",
          "capacity": "452 mbps"
        },
        {
          "phase-name": "second phase",
          "capacity": "653 mbps"
        },
        {
          "phase-name": "third phase",
          "comment": "Autem at dolore molestiae velit autem ut."
        },
        {
          "phase-name": "second phase"
        }
      ]
    },
    {
      "id": 14,
      "name": "device V",
      "series": 1779,
      "phases": [
        {
          "phase-name": "fourth phase",
          "technician": "Laurie Green",
          "capacity": "362 mbps"
        }
      ]
    },
    {
      "id": 15,
      "name": "device H",
      "series": 1873,
      "phases": [
        {
          "phase-name": "first phase"
        },
        {
          "phase-name": "first phase",
          "technician": "Hilario Crooks",
          "comment": "Natus voluptatem laborum delectus quis molestiae deserunt."
        },
        {
          "phase-name": "first phase"
        },
        {
          "phase-name": "first phase",
          "comment": "Tempore aut dolorem provident fugiat qui.",
          "capacity": "997 mbps"
        }
      ]
    },
    {
      "id": 16,
      "name": "device H",
      "series": 1811,
      "phases": [
        {
          "phase-name": "second phase",
          "technician": "Ryan Breitenberg"
        },
        {
          "phase-name": "second phase",
          "technician": "Jeff Rowe Sr.",
          "comment": "Perferendis aut tempora consequatur.",
          "capacity": "160 mbps"
        },
        {
          "phase-name": "fourth phase",
          "comment": "Ut ducimus sunt.",
          "capacity": "519 mbps"
        }
      ]
    },
    {
      "id": 17,
      "name": "device S",
      "series": 1527,
      "phases": [
        {
          "phase-name": "fourth phase",
          "technician": "Lavada Fay",
          "comment": "Magnam porro esse ut soluta animi maiores.",
          "capacity": "820 mbps"
        },
        {
          "phase-name": "fourth phase",
          "comment": "Quos excepturi laudantium voluptatem porro."
        },
        {
          "phase-name": "second phase"
        },
        {
          "phase-name": "fourth phase"
        }
      ]
    },
    {
      "id": 18,
      "name": "device U",
      "series": 1579,
      "phases": [
        {
          "phase-name": "fourth phase"
        },
        {
          "phase-name": "first phase",
          "technician": "Jessica Reinger",
          "comment": "Quasi et fugiat libero repudiandae omnis fugiat dolores.",
          "capacity": "585 mbps"
        },
        {
          "phase-name": "third phase",
          "technician": "Ida Bosco",
          "comment": "Omnis ex rerum aut sit."
        }
      ]
    },
    {
      "id": 19,
      "name": "device C",
      "series": 1825,
      "phases": [
        {
          "phase-name": "first phase",
          "comment": "Doloremque aspernatur consequatur ut molestiae."
        },
        {
          "phase-name": "third phase",
          "technician": "Laverna Herzog",
          "comment": "Iure dolorem aut est ipsam debitis eligendi.",
          "capacity": "189 mbps"
        }
      ]
    },
    {
      "id": 20,
      "name": "device Y",
      "series": 1734,
      "phases": [
        {
          "phase-name": "fourth phase",
          "technician": "Hilma Welch",
          "comment": "Fugiat consequatur quis eveniet quo.",
          "capacity": "247 mbps"
        },
        {
          "phase-name": "first phase",
          "capacity": "459 mbps"
        },
        {
          "phase-name": "third phase",
          "technician": "Ethel Beier",
          "comment": "Ipsa cupiditate voluptatem rerum aspernatur esse."
        }
      ]
    },
    {
      "id": 21,
      "name": "device Q",
      "series": 1868,
      "phases": [
        {
          "phase-name": "third phase",
          "comment": "Beatae nulla dolorem at.",
          "capacity": "794 mbps"
        },
        {
          "phase-name": "third phase",
          "technician": "Marlee Torphy",
          "capacity": "118 mbps"
        },
        {
          "phase-name": "fourth phase",
          "technician": "Sallie Herzog",
          "comment": "Magnam sint est aut hic illo."
        },
        {
          "phase-name": "second phase",
          "technician": "Mrs. Nico Kuvalis"
        }
      ]
    }]

  constructor(private http:Http) {}

  getDeviceList():Observable<Device[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })
    return this.hardCodedData;
        // return this.http.get("http://localhost:3000/devices")
        //         .map(res => extractData(res))
        //         .catch(err => this.handleError(err));
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
