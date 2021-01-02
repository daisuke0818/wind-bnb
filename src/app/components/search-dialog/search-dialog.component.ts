import { cities } from './../../stay-data/stay-city';
import { Component, OnInit } from '@angular/core';
import { BnbManageFacde } from 'src/app/store/bnb-manage.facade';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss'],
})
export class SearchDialogComponent implements OnInit {
  // 宿泊都市
  cities = cities;
  $adult: Observable<number> = of(0);
  $child: Observable<number> = of(0);

  constructor(private bnbManageFacade: BnbManageFacde) {}

  ngOnInit(): void {
    this.$adult = this.bnbManageFacade.adult$;
    this.$child = this.bnbManageFacade.child$;
  }

  // ここの情報を状態管理する
  applyStayCity(city: string) {
    this.bnbManageFacade.saveStayCity(city);
  }

  // 大人人数を操作
  addAdult() {
    this.bnbManageFacade.addAdult();
  }
  reduceAdult() {
    this.bnbManageFacade.reduceAdult();
  }
  // 子供人数の操作
  addChild() {
    this.bnbManageFacade.addChild();
  }
  reduceChild() {
    this.bnbManageFacade.reduceChild();
  }
}
