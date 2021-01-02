import { BnbManageFacde } from 'src/app/store/bnb-manage.facade';
import { SearchDialogComponent } from './../../components/search-dialog/search-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-stay-list',
  templateUrl: './stay-list.component.html',
  styleUrls: ['./stay-list.component.scss'],
})
export class StayListComponent implements OnInit {
  constructor(public dialog: MatDialog, private facade: BnbManageFacde) {}
  $selectedCity = this.facade.city$;
  $adult = this.facade.adult$;
  $child = this.facade.child$;

  city: string;
  guest: number;

  ngOnInit(): void {}

  openSearchDialog() {
    this.dialog.open(SearchDialogComponent, { width: '500px' });
  }
}
