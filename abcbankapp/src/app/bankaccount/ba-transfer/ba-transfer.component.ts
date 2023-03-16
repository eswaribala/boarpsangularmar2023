import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ba-transfer',
  templateUrl: './ba-transfer.component.html',
  styleUrls: ['./ba-transfer.component.scss']
})
export class BaTransferComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.data);
  }

}
