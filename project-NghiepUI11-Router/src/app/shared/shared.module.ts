import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipe 
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CapitalizePipe
  ],
  exports: [
    CapitalizePipe
  ]
})
export class SharedModule { }
