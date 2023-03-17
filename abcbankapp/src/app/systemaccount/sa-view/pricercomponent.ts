import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'pricer',
  template: `
    {{ id | titlecase }}: {{ ( price$ | async) || 'loading...' }}
  `
})
export class PricerComponent  {
  @Input() id: string;

  public price$ = new Subject();

  private static Endpoint = 'wss://ws.coincap.io/prices/';
  private webSocket: WebSocket;

  ngOnInit() {
    const id = this.id;
    this.webSocket = new WebSocket(this.getEndpoint(id));

    this.webSocket.onmessage = (msg: MessageEvent) => {
      const data = JSON.parse(msg.data);
      this.price$.next(data[id]);
    };
  }

  ngOnDestroy() {
    this.webSocket.close();
  }

  private getEndpoint(id: string) {
    return PricerComponent.Endpoint + '?assets=' + id;
  }
}
