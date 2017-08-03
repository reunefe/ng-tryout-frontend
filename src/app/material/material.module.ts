import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdMenuModule,
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
    MdMenuModule,
    MdIconModule,
    MdToolbarModule,
    MdProgressSpinnerModule
  ],
  exports: [
    FlexLayoutModule,
    MdCardModule,
    MdButtonModule,
    MdTabsModule,
    MdMenuModule,
    MdIconModule,
    MdToolbarModule,
    MdProgressSpinnerModule
  ],
  declarations: []
})
export class MaterialModule {
}
