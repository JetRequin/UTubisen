import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { VideosListComponent } from './videos-list/videos-list.component';
import { AppRoutingModule } from './app-routing.module';
import { VideosInputComponent } from './videos-input/videos-input.component';
// Add the Router module

@NgModule({
  declarations: [
    AppComponent,
    VideosListComponent,
    VideosInputComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
