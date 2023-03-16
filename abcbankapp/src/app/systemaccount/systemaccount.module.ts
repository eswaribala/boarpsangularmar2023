import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaCreateComponent } from './sa-create/sa-create.component';
import { SaEditComponent } from './sa-edit/sa-edit.component';
import { SaViewComponent } from './sa-view/sa-view.component';
import { SaDeleteComponent } from './sa-delete/sa-delete.component';

import {RouterModule} from "@angular/router";
import {SystemAccountRoutingModule} from "./systemaccount-routing.module";



@NgModule({
  declarations: [
    SaCreateComponent,
    SaEditComponent,
    SaViewComponent,
    SaDeleteComponent,

  ],
  imports: [
    CommonModule,
    SystemAccountRoutingModule

  ]
})
export class SystemAccountModule { }
