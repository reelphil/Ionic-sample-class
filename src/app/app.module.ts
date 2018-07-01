import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';  // เรียกใช้ formsmoduls

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule//ใส่ชื่ีอ formsmodules  ตรงนนี้ด้วย

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
