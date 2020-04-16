import { Component, OnInit, Input } from "@angular/core";
import { ContactInfo } from "src/app/shared/models/resume/contact-info.model";

@Component({
  selector: "app-contact-info",
  templateUrl: "./contact-info.component.html",
  styleUrls: ["./contact-info.component.scss"],
})
export class ContactInfoComponent implements OnInit {
  // @Input() contactInfo: ContactInfo;

  constructor() {}

  ngOnInit() {}
}
