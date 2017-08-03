import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { appRoutes } from './app.routes';

import { NavigationComponent } from './views/navigation/navigation.component';

import { CatTileComponent } from './views/cats/cat-tile/cat-tile.component';
import { CatOverviewComponent } from './views/cats/cat-overview/cat-overview.component';

import { NagivationService } from './services/nagivation.service';
import { CatService } from './services/cat.service';
import { OwnerOverviewComponent } from './views/owners/owner-overview/owner-overview.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CatTileComponent,
    CatOverviewComponent,
    NavigationComponent,
    OwnerOverviewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule
  ],
  providers: [NagivationService, CatService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
