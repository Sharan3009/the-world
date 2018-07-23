import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-geography',
  templateUrl: './geography.component.html',
  styleUrls: ['./geography.component.css']
})
export class GeographyComponent implements OnInit {
  @Input() region:any;
  @Input() subregion:any;
  @Input() capital:any;
  @Input() demonym:any;
  @Input() latlng:any;
  @Input() area:any;
  @Input() borders:any;
  constructor() { }

  ngOnInit() {
  }

}
