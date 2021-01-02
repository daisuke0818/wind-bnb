import { Accommodation } from './../../interface/accommodation.interface';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
// 宿泊先のデータ
import { data } from '../../stay-data/stay-data';

@Component({
  selector: 'app-stay-card',
  templateUrl: './stay-card.component.html',
  styleUrls: ['./stay-card.component.scss'],
})
export class StayCardComponent implements OnChanges, OnInit {
  @Input() adult = 0;
  @Input() child = 0;
  @Input() city = '';

  accData = data;

  constructor() {}

  ngOnChanges(): void {
    if (this.city !== '') {
      // ここでInputで貰ったのをもとにデータの絞り込みをする
      this.accData = data
        .filter((rowData: Accommodation) => rowData.city === this.city)
        .filter((refinedData: Accommodation) => refinedData.maxGuests >= this.adult + this.child);
    } else {
      this.accData = data.filter(
        (rowData: Accommodation) => rowData.maxGuests >= this.adult + this.child
      );
    }
  }
  ngOnInit(): void {}
}
