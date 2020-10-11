import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pwa';

  constructor(swUpdate: SwUpdate) {
    swUpdate.available.subscribe((event) => {
      alert(
        `Version ${event.available} available. Current is ${event.current}`
      );
    });

    swUpdate.activated.subscribe((event) => {
      alert(
        `Version ${event.current} activated. Previous was ${event.previous}`
      );
    });
  }
}
