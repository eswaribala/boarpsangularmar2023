import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ba-withdraw',
  template:'{{title}}',
  styleUrls: ['./ba-withdraw.component.scss']
})
export class BaWithdrawComponent implements OnInit {

  protected title="Withdraw from Account"
  constructor() { }

  ngOnInit(): void {
  }

}
