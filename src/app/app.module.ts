import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {WeatherupdateService} from './weatherupdate.service';
import { AppComponent } from './app.component';
import { WeatherComponent } from './component/weather/weather.component';
const appRoutes:Routes=[
  {path:"",component:WeatherComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),ReactiveFormsModule,HttpClientModule
    ],
  providers: [WeatherupdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
