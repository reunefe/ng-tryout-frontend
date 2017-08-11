import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { FileSelectDirective } from 'ng2-file-upload';
import { MaterialModule } from './material/material.module';
import { appRoutes } from './app.routes';

import { NavigationComponent } from './views/navigation/navigation.component';

import { CatTileComponent } from './views/cats/cat-tile/cat-tile.component';
import { CatOverviewComponent } from './views/cats/cat-overview/cat-overview.component';

import { NavigationService } from './services/navigation.service';
import { CatService } from './services/cat.service';
import { OwnerOverviewComponent } from './views/owners/owner-overview/owner-overview.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { OwnerService } from './services/owner.service';
import { OwnerTileComponent } from './views/owners/owner-tile/owner-tile.component';
import { OwnerRegistrationComponent } from './views/owners/owner-registration/owner-registration.component';
import { OwnerInfoComponent } from './views/owners/owner-info/owner-info.component';
import { BaseDialogComponent } from './views/base-dialog/base-dialog.component';
import { ImagePreviewComponent } from './views/image-preview/image-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    CatTileComponent,
    CatOverviewComponent,
    NavigationComponent,
    OwnerOverviewComponent,
    PageNotFoundComponent,
    OwnerTileComponent,
    OwnerRegistrationComponent,
    OwnerInfoComponent,
    BaseDialogComponent,
    ImagePreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule
  ],
  entryComponents: [OwnerRegistrationComponent],
  providers: [NavigationService, CatService, OwnerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
