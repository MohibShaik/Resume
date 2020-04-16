import { Component, OnInit, Input } from "@angular/core";
import { Experience } from "src/app/shared/models/resume/experience.model";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent implements OnInit {
  @Input() experiences: Experience[];

  constructor() {}

  ngOnInit() {}
}
