import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Example1Component } from './components/example-1/example-1.component'


export const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'example-1', component: Example1Component }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule],
})
export class AppRoutingModule {}

