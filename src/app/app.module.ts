import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PlotlyComponent } from './components/plotly/plotly.component';

// pages 
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Example1Component } from './components/example-1/example-1.component'

// routes
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    PlotlyComponent, 
    HomeComponent, 
    AboutComponent, Example1Component 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
