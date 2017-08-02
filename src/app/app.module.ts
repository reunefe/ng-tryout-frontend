import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CatTileComponent } from './cats/cat-tile/cat-tile.component';
import { MaterialModule } from './material/material.module';
import { CatOverviewComponent } from './cats/cat-overview/cat-overview.component';
import { CatService } from './services/cat.service';

@NgModule({
  declarations: [
    AppComponent,
    CatTileComponent,
    CatOverviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
