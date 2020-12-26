import { Component, OnInit } from '@angular/core';
// 宿泊先のデータ
import { data } from '../../stay-data/stay-data';

@Component({
  selector: 'app-stay-card',
  templateUrl: './stay-card.component.html',
  styleUrls: ['./stay-card.component.scss'],
})
export class StayCardComponent implements OnInit {
  accData = data;

  constructor() {}

  ngOnInit(): void {}
}
