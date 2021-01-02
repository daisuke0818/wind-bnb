import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StayListComponent } from './container/stay-list/stay-list.component';
import { StayCardComponent } from './components/stay-card/stay-card.component';
import { MaterialModule } from './common/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchDialogComponent } from './components/search-dialog/search-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppStoreModule } from './app-store/app-store.module';
import { BnbManageModule } from './store/bnb-manage.module';

@NgModule({
  declarations: [
    AppComponent,
    StayListComponent,
    StayCardComponent,
    SearchBoxComponent,
    SearchDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppStoreModule,
    BnbManageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
