import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdCardModule,
  MdProgressSpinnerModule,
  MdTabsModule,
  MdToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdCardModule,
    MdButtonModule,
    MdTabsModule,
    MdToolbarModule,
    MdProgressSpinnerModule
  ],
  exports: [
    FlexLayoutModule,
    MdCardModule,
    MdButtonModule,
    MdTabsModule,
    MdToolbarModule,
    MdProgressSpinnerModule
  ],
  declarations: []
})
export class MaterialModule {
}
