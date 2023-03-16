import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuService} from "../../../services/menu.service";

@Component({
  selector: 'app-demat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demat.component.html',
  styleUrls: ['./demat.component.scss']
})
export class DematComponent implements OnInit {
  breadcrumbInstance:any;
  title:string="Demat Account";
  constructor() { }

  ngOnInit(): void {

  }

}
