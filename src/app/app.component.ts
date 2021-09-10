import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'challenge-github';
  // {"publicKey":"BMH7FWHL2zUYpd4HrmfTE2oVnOLnbLpr4FI2_lFU25FIrIC1t_5u2avxBOt6BqeUh23ZXz_n3xW0tlYEUizGqVw","privateKey":"q6SxPSjKLeAZ7_mWPXWRo3LNFMoUqM2KZGEJxv3cEyU"}
  constructor(private swPush: SwPush) {}
}
