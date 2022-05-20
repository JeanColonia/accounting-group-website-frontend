import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    NgbModule
    

  ],
  exports: [MatIconModule, MatMenuModule, MatButtonModule, NgbModule]
})
export class SharedModule { }
