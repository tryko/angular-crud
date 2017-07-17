import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <navbar></navbar>
  <device-manager></device-manager>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
