import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { AboutComponent } from './about/about.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [
    AboutComponent,
    AvatarComponent,
    ContactInfoComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
