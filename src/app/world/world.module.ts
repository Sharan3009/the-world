import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionsComponent } from './regions/regions.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SharedModule } from '../shared/shared.module';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    SharedModule,
    OrderModule,
    FilterPipeModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'home', component: RegionsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'countries/:filter/:filterName', component: CountriesComponent },
      { path: 'country/:countryName', component: CountryComponent }
    ])
  ],
  declarations: [RegionsComponent, CountriesComponent, CountryComponent]
})
export class WorldModule { }
