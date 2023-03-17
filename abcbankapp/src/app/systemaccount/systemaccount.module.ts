import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaCreateComponent } from './sa-create/sa-create.component';
import { SaEditComponent } from './sa-edit/sa-edit.component';
import { SaViewComponent } from './sa-view/sa-view.component';
import { SaDeleteComponent } from './sa-delete/sa-delete.component';

import {RouterModule} from "@angular/router";
import {SystemAccountRoutingModule} from "./systemaccount-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {PricerComponent} from "./sa-view/pricercomponent";
import {TagInputModule} from "ngx-chips";



@NgModule({
  declarations: [
    SaCreateComponent,
    SaEditComponent,
    SaViewComponent,
    SaDeleteComponent,
    PricerComponent
  ],
  imports: [
    CommonModule,
    SystemAccountRoutingModule,
    HttpClientModule,
    FormsModule,
    TagInputModule


  ]
})
export class SystemAccountModule { }
