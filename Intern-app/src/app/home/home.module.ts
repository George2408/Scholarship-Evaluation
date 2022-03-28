import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
  ],
  exports:[
    HomePageComponent,
  ]
})
export class HomeModule { }
