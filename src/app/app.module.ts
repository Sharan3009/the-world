import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WorldModule } from './world/world.module';
import { NotFoundModule } from './not-found/not-found.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RestcountriesService } from './restcountries.service';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    WorldModule,
    NotFoundModule,
    SharedModule,
    HttpClientModule,
    OrderModule,
    FilterPipeModule,
    FormsModule
  ],
  providers: [RestcountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
