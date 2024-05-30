import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SectionLayoutComponent } from './components/shared/section-layout/section-layout.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [ 
    AppComponent,
    HeroComponent,
    AboutMeComponent,
    SectionLayoutComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
