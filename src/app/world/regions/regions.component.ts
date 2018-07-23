import { Component, OnInit } from '@angular/core';
import { RestcountriesService } from '../../restcountries.service';
import { Regions } from './regions';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit, Regions {
  public allRegions = [];
  constructor(private httpService: RestcountriesService) { }

  ngOnInit() {
    this.httpService.getAllCountries().subscribe(
      data => {
        // pushing unique names of regions into an array
        for (let country of data) {
          this.allRegions.indexOf(country.region) === -1 && country.region != '' ? this.allRegions.push(country.region) : null;
        }
      }
    )
  }

}
