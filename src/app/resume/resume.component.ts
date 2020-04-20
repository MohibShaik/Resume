import { Component, OnInit } from "@angular/core";
import { ResumeService } from "../core/resume.service";
import { Resume } from "../shared/models/resume/resume.model";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"],
})
export class ResumeComponent implements OnInit {
  public resume: Resume;
  constructor(public resumeService: ResumeService) {

  }

  ngOnInit() {
    this.resumeService.getResumeDetails().subscribe((res) => {
      this.resume = res[0];
      console.log(res, "service called");
    });
  }
}




