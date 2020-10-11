import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { PushNotificationsService } from './push-notifications/push-notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pwa';

  constructor(pushNotificationsService: PushNotificationsService) {
    pushNotificationsService.init();
  }
}
