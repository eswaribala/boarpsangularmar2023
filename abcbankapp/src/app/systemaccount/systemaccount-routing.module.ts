import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SaCreateComponent} from "./sa-create/sa-create.component";
import {SaEditComponent} from "./sa-edit/sa-edit.component";
import {SaViewComponent} from "./sa-view/sa-view.component";
import {SaDeleteComponent} from "./sa-delete/sa-delete.component";




const routes: Routes = [
  {
    path:'Create',
    component:SaCreateComponent
  },
  {
    path:'Edit',
    component:SaEditComponent
  },
  {
    path:'View',
    component: SaViewComponent

  },

  {
    path:'Delete',
    component: SaDeleteComponent

  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAccountRoutingModule { }
