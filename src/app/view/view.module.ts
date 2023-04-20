import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavComponent } from './nav/nav/nav.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './pages/notfound/notfound.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    NavComponent,
    RegisterComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    FormsModule
  ],
  exports: [

  ]
})
export class ViewModule { }
