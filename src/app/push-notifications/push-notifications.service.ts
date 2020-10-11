import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PushNotificationsService {
  pushSubscriptions = this._db.collection('push_subscriptions');

  constructor(
    private _swUpdate: SwUpdate,
    private _swPush: SwPush,
    private _db: AngularFirestore
  ) {}

  init(): void {
    this._logEvents();
    this._subscribeToNotifications();
  }

  private _logEvents(): void {
    this._swUpdate.available.subscribe((event) => {
      alert(
        `Version ${event.available} available. Current is ${event.current}`
      );
    });

    this._swUpdate.activated.subscribe((event) => {
      alert(
        `Version ${event.current} activated. Previous was ${event.previous}`
      );
    });
  }

  private async _subscribeToNotifications(): Promise<void> {
    const sub = await this._swPush.requestSubscription({
      serverPublicKey: environment.VAPID.publicKey,
    });

    this._saveSubscription(sub);
  }

  private _saveSubscription(sub: PushSubscription): Promise<DocumentReference> {
    debugger;
    return this.pushSubscriptions.add(sub);
  }
}
