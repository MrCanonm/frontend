import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiPPage } from './api-p.page';

const routes: Routes = [
  {
    path: '',
    component: ApiPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiPPageRoutingModule {}
