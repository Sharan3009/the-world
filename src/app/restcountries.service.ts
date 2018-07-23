import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestcountriesService {
  private baseUrl:string = 'https://restcountries.eu/rest/v2'
  constructor(private http: HttpClient) { }
  // getting all countries to create region page
  public getAllCountries():Observable<any>{
    return this.http.get(`${this.baseUrl}/all?fields=region`)
  }
  // getting all countries with filters applied
  public getAllCountriesWithFilter(filter:string,filterName:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/${filter}/${filterName}?fields=name;capital;flag;subregion;population;area`)
  }
  // getting single country
  public getCountry(countryName:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/name/${countryName}?fullText=true`)
  }
  // method to handle error
  private handleError(err: HttpErrorResponse) {
    console.log("Handle error http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }
}
