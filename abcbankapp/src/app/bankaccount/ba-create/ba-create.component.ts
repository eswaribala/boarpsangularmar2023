import { Component, OnInit } from '@angular/core';
import {IndividualComponent} from "./individual/individual.component";
import {CorporateComponent} from "./corporate/corporate.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {MatTabsModule} from "@angular/material/tabs";
import {RouterModule} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {BreadcrumbModule} from "primeng/breadcrumb";

@Component({
  selector: 'app-ba-create',
  standalone:true,
  imports:[IndividualComponent,CorporateComponent,RouterModule,CommonModule,MatFormFieldModule,MatIconModule,
    MatInputModule,   MatButtonModule,MatSelectModule,MatOptionModule,MatTabsModule,BreadcrumbModule,
    ReactiveFormsModule,FormsModule],
  templateUrl: './ba-create.component.html',
  styleUrls: ['./ba-create.component.scss']
})
export class BaCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
