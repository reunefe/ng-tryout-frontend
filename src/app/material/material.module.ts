import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdTabsModule,
  MdToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdTabsModule,
    MdToolbarModule
  ],
  exports: [
    FlexLayoutModule,
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdTabsModule,
    MdToolbarModule
  ],
  declarations: []
})
export class MaterialModule {
}
