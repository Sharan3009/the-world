import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent implements OnInit {

  @Input() imgUrl:any;
  @Input() countryName: any;
  @Input() capital:any;
  @Input() subregion:any;
  @Input() population:any;
  @Input() area:any;
  constructor() { }

  ngOnInit() {
  }
}
