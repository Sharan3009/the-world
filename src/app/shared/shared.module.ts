import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionCardComponent } from './region-card/region-card.component';
import { RouterModule } from '@angular/router';
import { CountryCardComponent } from './country-card/country-card.component';
import { NamesComponent } from './names/names.component';
import { LanguagesComponent } from './languages/languages.component';
import { CodesComponent } from './codes/codes.component';
import { GeographyComponent } from './geography/geography.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [RegionCardComponent, CountryCardComponent, NamesComponent, LanguagesComponent, CodesComponent, GeographyComponent, HeaderComponent],
  exports:[RegionCardComponent,CountryCardComponent,NamesComponent,LanguagesComponent,CodesComponent,GeographyComponent,HeaderComponent,CommonModule,FormsModule]
})
export class SharedModule { }
