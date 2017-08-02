import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCardModule, MdProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdCardModule,
    MdButtonModule,
    MdProgressSpinnerModule
  ],
  exports: [
    FlexLayoutModule,
    MdCardModule,
    MdButtonModule,
    MdProgressSpinnerModule
  ],
  declarations: []
})
export class MaterialModule {
}
