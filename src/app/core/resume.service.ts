import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ResumeService {
  private jsonURL = "../../assets/data/resume.json";

  constructor(private http: HttpClient) {}

  public getResumeDetails() {
    return this.http.get(this.jsonURL);
  }
}
