import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StayListComponent } from './container/stay-list/stay-list.component';
import { StayCardComponent } from './components/stay-card/stay-card.component';
import { MaterialModule } from './common/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [AppComponent, StayListComponent, StayCardComponent, SearchBoxComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
