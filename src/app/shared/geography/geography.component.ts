import { Component, OnInit, Input } from '@angular/core';
import { Geography } from './geography';

@Component({
  selector: 'app-geography',
  templateUrl: './geography.component.html',
  styleUrls: ['./geography.component.css']
})
export class GeographyComponent implements OnInit, Geography {
  // taking input from the parent component
  @Input() region
  @Input() subregion
  @Input() capital
  @Input() demonym
  @Input() latlng
  @Input() area
  @Input() borders
  constructor() { }

  ngOnInit() {
  }

}
