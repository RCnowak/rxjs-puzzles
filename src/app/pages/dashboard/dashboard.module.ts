import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatCardModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {}
