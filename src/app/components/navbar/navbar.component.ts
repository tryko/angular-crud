import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
    <div>
  <md-toolbar color="primary">
    <md-icon>view_quilt</md-icon>Devices Panel
    <button md-icon-button >
    </button>
  </md-toolbar>
</div>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
