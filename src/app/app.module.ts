import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
//importing world module
import { WorldModule } from './world/world.module';
//importing not found module
import { NotFoundModule } from './not-found/not-found.module';
//importing shared module
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RestcountriesService } from './restcountries.service';
//importing orderby pipe
import { OrderModule } from 'ngx-order-pipe';
//importing filterby pipe
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//importing toastr
import { ToastrModule } from 'ngx-toastr';

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
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [RestcountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
