import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StayListComponent } from './container/stay-list/stay-list.component';

const routes: Routes = [
  { path: '', component: StayListComponent },
  { path: '**', component: StayListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
