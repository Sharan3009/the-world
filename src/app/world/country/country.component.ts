import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestcountriesService } from '../../restcountries.service';
import { ActivatedRoute } from '@angular/router';
import { Country } from './country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [Location]
})
export class CountryComponent implements OnInit, Country {
  public country: String;
  constructor(private httpService: RestcountriesService, private router: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    // getting country data by countryName
    let countryName = this.router.snapshot.paramMap.get('countryName');
    this.httpService.getCountry(countryName).subscribe(
      data => {
        this.country = data;
      }
    )
  }
  goBackToPreviousPage(): any {
    this.location.back();
  }
}
