import { cities } from './../../stay-data/stay-city';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss'],
})
export class SearchDialogComponent implements OnInit {
  // 宿泊都市
  cities = cities;

  constructor() {}

  ngOnInit(): void {}

  // ここの情報を状態管理する
  applyStayCity(city: string) {
    console.log(city);
  }
}
