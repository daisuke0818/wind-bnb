import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StayListComponent } from './container/stay-list/stay-list.component';
import { StayCardComponent } from './components/stay-card/stay-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StayListComponent,
    StayCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
