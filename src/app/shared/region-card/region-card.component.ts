import { Component, OnInit, Input } from '@angular/core';
import { RegionCard } from './reigon-card';

@Component({
  selector: 'app-region-card',
  templateUrl: './region-card.component.html',
  styleUrls: ['./region-card.component.css']
})
export class RegionCardComponent implements OnInit, RegionCard {
  // taking input from the region component
  @Input() imgUrl;
  @Input() regionName;

  constructor() { }

  ngOnInit() {
  }

}
