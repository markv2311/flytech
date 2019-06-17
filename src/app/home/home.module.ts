import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { AppComponent } from '../app.component';
import { ConfirmDirective } from './homecontact.directive';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormGroup,
    ConfirmDirective,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class HomeModule { }



@NgModule({
    imports: [SweetAlert2Module.forRoot()],
})
export class AppModule {
}
