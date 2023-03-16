import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-ba-deposit',
  templateUrl: './ba-deposit.component.html',
  styleUrls: ['./ba-deposit.component.scss']
})
export class BaDepositComponent implements OnInit {
  breadCrumbInstance:any;
  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.breadCrumbInstance=this.menuService.loadBreadCrumbData();
  }

}
