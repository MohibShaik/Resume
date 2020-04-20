import { Component, OnInit, Input } from '@angular/core';
import { Projects } from 'src/app/shared/models/resume/projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() projects: Projects[]

  constructor() { }

  ngOnInit() {
  }

}
