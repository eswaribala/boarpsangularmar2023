import { Component, OnInit } from '@angular/core';
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
/*
  menuDataInstance:any;
  constructor(private menuService:MenuService) { }
*/
  ngOnInit(): void {
  //  this.menuDataInstance=this.menuService.loadMenuData();
  }

}
