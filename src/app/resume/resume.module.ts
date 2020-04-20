import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ResumeRoutingModule } from "./resume-routing.module";
import { AboutComponent } from "./about/about.component";
import { AvatarComponent } from "./avatar/avatar.component";
// import { ContactInfoComponent } from "./contact-info/contact-info.component";
import { EducationComponent } from "./education/education.component";
import { ExperienceComponent } from "./experience/experience.component";
import { SkillsComponent } from "./skills/skills.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { ProjectsComponent } from "./projects/projects.component";
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { MenuComponent } from '../shared/components/menu/menu.component';

@NgModule({
  declarations: [
    AboutComponent,
    AvatarComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    PersonalInfoComponent,
    MenuComponent
  ],
  imports: [CommonModule, ResumeRoutingModule, AngularFontAwesomeModule],
  exports: [
    AvatarComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    PersonalInfoComponent,
    MenuComponent
  ],

})
export class ResumeModule { }
