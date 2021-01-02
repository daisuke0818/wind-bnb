import { SearchDialogComponent } from './../../components/search-dialog/search-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-stay-list',
  templateUrl: './stay-list.component.html',
  styleUrls: ['./stay-list.component.scss'],
})
export class StayListComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  city: string;
  guest: number;

  ngOnInit(): void {}

  openSearchDialog() {
    const dialogRef = this.dialog.open(SearchDialogComponent, {
      data: { city: this.city, guest: this.guest },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
