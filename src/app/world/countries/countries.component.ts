import { Component, OnInit } from '@angular/core';
import { RestcountriesService } from '../../restcountries.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Countries } from './countries';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [Location]
})
export class CountriesComponent implements OnInit,Countries {
  public countries=[];
  public sortName='';
  public sortBool=true;
  public search = {name:''}
  public title ;
  constructor(private httpService: RestcountriesService, private router: ActivatedRoute, private location:Location) { }

  ngOnInit() {
    let filter = this.router.snapshot.paramMap.get('filter')
    let filterName = this.router.snapshot.paramMap.get('filterName')
    if(filter.toLowerCase() == 'region'){
      this.title = filterName;
    }
    this.httpService.getAllCountriesWithFilter(filter,filterName).subscribe(
      data=>{
        this.countries = data;
      }
    )
  }
  goBackToPreviousPage():any{
    this.location.back();
  }
}
