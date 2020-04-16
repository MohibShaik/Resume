import { Component, OnInit, Input } from "@angular/core";
import { Resume } from "src/app/shared/models/resume/resume.model";

@Component({
  selector: "app-avatar",
  templateUrl: "./avatar.component.html",
  styleUrls: ["./avatar.component.scss"],
})
export class AvatarComponent implements OnInit {
  @Input() resume: Resume;

  constructor() {}

  ngOnInit() {}
}
