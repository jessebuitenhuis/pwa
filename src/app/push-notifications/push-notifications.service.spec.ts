/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PushNotificationsService } from './push-notifications.service';

describe('Service: PushNotifications', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PushNotificationsService]
    });
  });

  it('should ...', inject([PushNotificationsService], (service: PushNotificationsService) => {
    expect(service).toBeTruthy();
  }));
});
