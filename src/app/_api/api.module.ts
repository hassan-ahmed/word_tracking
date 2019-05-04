import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ApiService } from './api.service';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
  ],
  providers: [
    ApiService
  ]
})
export class ApiModule { }
