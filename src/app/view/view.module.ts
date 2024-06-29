import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavComponent } from './nav/nav/nav.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    NavComponent,
  ],
  imports: [CommonModule, ViewRoutingModule, FormsModule],
  exports: [],
})
export class ViewModule {}
