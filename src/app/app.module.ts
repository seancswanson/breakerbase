import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SessionLogComponent } from './session-log/session-log.component';
import { TrainerComponent } from './trainer/trainer.component';
import { SkillLibraryComponent } from './skill-library/skill-library.component';
import {
  NgZorroAntdModule,
  NZ_I18N,
  en_US,
  NzTagModule,
  NzFormModule,
  NzCardModule,
  NzToolTipModule,
  NzGridModule,
  NzSpinModule,
  NzCollapseModule,
} from 'ng-zorro-antd';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { RegisterPageComponent } from './register-page/register-page.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    LoginPageComponent,
    SessionLogComponent,
    TrainerComponent,
    SkillLibraryComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzTagModule,
    NzFormModule,
    NzCardModule,
    NzToolTipModule,
    NzGridModule,
    NzSpinModule,
    NzCollapseModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
