import { Component, OnInit, Input } from '@angular/core';
import { CountryCards } from './country-card';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent implements OnInit,CountryCards {

  @Input() imgUrl
  @Input() countryName
  @Input() capital
  @Input() subregion
  @Input() population
  @Input() area
  constructor() { }

  ngOnInit() {
  }
}
