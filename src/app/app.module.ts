import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParrotComponent } from './parrot/parrot.component';
import { DJIComponent } from './dji/dji.component';
import { AutelComponent } from './autel/autel.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ConfirmDirective } from './home/homecontact.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParrotComponent,
    DJIComponent,
    AutelComponent,
    NavComponent,
    ConfirmDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
