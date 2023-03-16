import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
const DATA_URL='http://localhost:4200/BankAccount/Edit';
@Component({
  selector: 'app-ba-edit',
  templateUrl: './ba-edit.component.html',
  styleUrls: ['./ba-edit.component.scss']
})
export class BaEditComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(DATA_URL).subscribe((data) => {
      console.log(data);

    });
  }

}
