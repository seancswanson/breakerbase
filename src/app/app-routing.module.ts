import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoinPageComponent } from './join-page/join-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {
  path: "",
  component: LandingPageComponent
},
  {
  path: "join",
  component: JoinPageComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
