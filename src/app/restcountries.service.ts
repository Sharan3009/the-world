import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestcountriesService {
  private baseUrl:string = 'https://restcountries.eu/rest/v2'
  constructor(private http: HttpClient) { }
  
  getAllCountries():Observable<any>{
    return this.http.get(`${this.baseUrl}/all`)
  }
  getAllCountriesWithFilter(filter:string,filterName:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/${filter}/${filterName}`)
  }
  getCountry(countryName:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/name/${countryName}?fullText=true`)
  }
}
