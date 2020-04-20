import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ResumeComponent } from "./resume/resume.component";
import { ResumeModule } from "./resume/resume.module";
import { HttpClientModule } from "@angular/common/http";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { MenuComponent } from './shared/components/menu/menu.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    // MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResumeModule,
    HttpClientModule,
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
