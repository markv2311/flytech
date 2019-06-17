import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParrotComponent } from './parrot/parrot.component';
import { DJIComponent } from './dji/dji.component';
import { AutelComponent } from './autel/autel.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent}, {path: 'DJI', component: DJIComponent}, {path: 'Autel', component: AutelComponent},
  { path: 'Parrot', component: ParrotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
