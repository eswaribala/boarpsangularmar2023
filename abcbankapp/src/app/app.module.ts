import { NgModule } from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaCreateComponent } from './bankaccount/ba-create/ba-create.component';
import { BaEditComponent } from './bankaccount/ba-edit/ba-edit.component';
import { BaViewComponent } from './bankaccount/ba-view/ba-view.component';
import { BaDeleteComponent } from './bankaccount/ba-delete/ba-delete.component';
import { BaTransferComponent } from './bankaccount/ba-transfer/ba-transfer.component';
import { BaDepositComponent } from './bankaccount/ba-deposit/ba-deposit.component';
import { BaWithdrawComponent } from './bankaccount/ba-withdraw/ba-withdraw.component';
import { BaDirectdebitComponent } from './bankaccount/ba-directdebit/ba-directdebit.component';
import { MenuComponent } from './menu/menu.component';
import { BankComponent } from './bankaccount/bank/bank.component';
import {TieredMenuModule} from "primeng/tieredmenu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { IndividualComponent } from './bankaccount/ba-create/individual/individual.component';
import { CorporateComponent } from './bankaccount/ba-create/corporate/corporate.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import { DynamicComponent } from './bankaccount/ba-create/corporate/dynamic/dynamic.component';
import {DematComponent} from "./bankaccount/ba-create/demat/demat.component";
import {AgGridModule} from 'ag-grid-angular';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {ButtonModule} from "primeng/button";
import { MockService } from './interceptors/mock.service';
@NgModule({
  declarations: [
    AppComponent,
   // BaCreateComponent,
    BaEditComponent,
    BaViewComponent,
    BaDeleteComponent,
    BaTransferComponent,
    BaDepositComponent,
    BaWithdrawComponent,
    BaDirectdebitComponent,
    MenuComponent,
    BankComponent,

   // CorporateComponent,
    DynamicComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    TieredMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BreadcrumbModule,
    MatFormFieldModule,
    FormsModule,
    ButtonModule


  ],
  providers: [Title,{
    provide: HTTP_INTERCEPTORS,
    useClass: MockService,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
