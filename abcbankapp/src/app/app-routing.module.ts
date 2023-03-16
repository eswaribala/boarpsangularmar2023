import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {BaCreateComponent} from "./bankaccount/ba-create/ba-create.component";
import {BaEditComponent} from "./bankaccount/ba-edit/ba-edit.component";
import {BaViewComponent} from "./bankaccount/ba-view/ba-view.component";
import {BaDeleteComponent} from "./bankaccount/ba-delete/ba-delete.component";
import {BaTransferComponent} from "./bankaccount/ba-transfer/ba-transfer.component";
import {BaDepositComponent} from "./bankaccount/ba-deposit/ba-deposit.component";
import {BaWithdrawComponent} from "./bankaccount/ba-withdraw/ba-withdraw.component";
import {BankComponent} from "./bankaccount/bank/bank.component";
import {BaDirectdebitComponent} from "./bankaccount/ba-directdebit/ba-directdebit.component";

const routes: Routes = [
  {

      path: 'BankAccount',
      component:BankComponent,
      children:[{
        path: 'Create',
        component: BaCreateComponent,
       // title:'Create Bank Account',
        data:{title:'Create Bank Account'}
      },
        {
          path: 'Edit',
          component: BaEditComponent,
        //  title:'Edit Bank Account',
          data:{title:'Edit Bank Account'}
        },
        {
          path: 'View',
          component: BaViewComponent,
         // title:'View Bank Account',
          data:{title:'View Bank Account'}
        },
        {
          path: 'Delete',
          component: BaDeleteComponent,
         // title:'Delete Bank Account',
          data:{title:'Delete Bank Account'}
        },
        {
          path: 'Transfer',
          component: BaTransferComponent,
          //title:'Transfer Money',
          data:{title:'Transfer Money'}
        },
        {
          path: 'Deposit',
          component: BaDepositComponent,
         // title:'Deposit Money',
          data:{title:'Deposit Money'}
        },
        {
          path: 'Withdraw',
          component: BaWithdrawComponent,
          //title:'Withdraw Money',
          data:{title:'Withdraw  Money'}
        },
        {
          path: 'DirectDebit',
          component: BaDirectdebitComponent,
          //title:'Direct Debit',
          data:{title:'Direct Debit'}
        }
      ]
    },
      {
        path:'SystemAccount',
        loadChildren: () => import('./systemaccount/systemaccount.module')
          .then(m => m.SystemAccountModule)
      }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
