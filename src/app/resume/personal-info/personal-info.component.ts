import { Component, OnInit, Input } from '@angular/core';
import { ContactInfo } from 'src/app/shared/models/resume/contact-info.model';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  @Input() personalInfo: ContactInfo;

  constructor() { }

  ngOnInit() {
    console.log(this.personalInfo)
  }

}
