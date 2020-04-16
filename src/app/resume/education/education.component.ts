import { Component, OnInit, Input } from "@angular/core";
import { Education } from "src/app/shared/models/resume/education.model";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.scss"],
})
export class EducationComponent implements OnInit {
  @Input() education: Education[];

  constructor() {}

  ngOnInit() {}
}
