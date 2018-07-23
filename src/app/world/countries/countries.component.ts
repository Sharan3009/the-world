import { Component, OnInit } from '@angular/core';
import { RestcountriesService } from '../../restcountries.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Countries } from './countries';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [Location]
})
export class CountriesComponent implements OnInit, Countries {
  public countries = [];
  public sortName = '';
  public sortBool = true;
  public search = { name: '' }
  public title;
  constructor(private httpService: RestcountriesService, private router: ActivatedRoute, private location: Location, private toastr: ToastrService) { }

  ngOnInit() {
    //extracing filter and filterName from the url
    let filter = this.router.snapshot.paramMap.get('filter')
    let filterName = this.router.snapshot.paramMap.get('filterName')
    if (filter.toLowerCase() == 'region') {
      this.title = filterName;
    }
    //applying toastr when filtered by currency or language
    else if(filter.toLowerCase()=='currency'){
      setTimeout(()=>this.toastr.success(`Currency: ${filterName}`,'Showing all countries with filter'))
    }
    else if(filter.toLowerCase()=='lang'){
      setTimeout(()=>this.toastr.success(`Language: ${filterName}`,'Showing all countries with filter'))
    }
    else{
      //do nothing
    }
    this.httpService.getAllCountriesWithFilter(filter, filterName).subscribe(
      data => {
        this.countries = data;
      }
    )
  }
  goBackToPreviousPage(): any {
    this.location.back();
  }
}
