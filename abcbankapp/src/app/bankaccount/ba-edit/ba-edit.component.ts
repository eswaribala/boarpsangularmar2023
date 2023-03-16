import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ba-edit',
  templateUrl: './ba-edit.component.html',
  styleUrls: ['./ba-edit.component.scss']
})
export class BaEditComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   // console.log(this.activatedRoute.snapshot.data);
  }

}
