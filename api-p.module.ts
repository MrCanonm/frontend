import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiPPageRoutingModule } from './api-p-routing.module';

import { ApiPPage } from './api-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiPPageRoutingModule
  ],
  declarations: [ApiPPage]
})
export class ApiPPageModule {}
