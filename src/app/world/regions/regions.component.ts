import { Component, OnInit } from '@angular/core';
import { RestcountriesService } from '../../restcountries.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  public allRegions=[];
  constructor(private httpService:RestcountriesService) { }

  ngOnInit() {
    this.httpService.getAllCountries().subscribe(
      data=>{
        for(let country of data){
          this.allRegions.indexOf(country.region)===-1 && country.region!=''?this.allRegions.push(country.region):null;
        }
      }
    )
  }

}
