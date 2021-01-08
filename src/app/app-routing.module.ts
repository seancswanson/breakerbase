import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoinPageComponent } from './join-page/join-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SessionLogComponent } from './session-log/session-log.component';
import { SkillLibraryComponent } from './skill-library/skill-library.component';
import { TrainerComponent } from './trainer/trainer.component';


const routes: Routes = [
  {
  path: "",
  component: LandingPageComponent
},
  {
  path: "join",
  component: JoinPageComponent
},
  {
  path: "login",
  component: LoginPageComponent
},
  {
  path: "session-log",
  component: SessionLogComponent
},
  {
  path: "trainer",
  component: TrainerComponent
},
  {
  path: "skill-library",
  component: SkillLibraryComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
