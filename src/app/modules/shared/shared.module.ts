import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ModalComponent
  ]
})
export class SharedModule { }
