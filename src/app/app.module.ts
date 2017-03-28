import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing, appRoutingProviders} from "../app.routing";
import { AppComponent } from './app.component';
import {GetWklySalesService} from "./Services/get-wkly-sales.service";
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [appRoutingProviders,GetWklySalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
