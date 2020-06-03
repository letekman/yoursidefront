import { Component, OnInit } from '@angular/core';
import {ReportModel} from "../report-list-case/report-list-case.model";
import {ReportDetailedService} from "../../services/report-detailed.service";
import {ActivatedRoute} from "@angular/router";
import {CurrentUserService} from "../../services/current-user.service";

@Component({
  selector: 'app-report-detailed',
  templateUrl: './report-detailed.component.html',
  styleUrls: ['./report-detailed.component.css']
})
export class ReportDetailedComponent implements OnInit {
  report: ReportModel;
  id: string;
  resolved: boolean;
  role: string

  constructor(private reportDetailedService: ReportDetailedService, private route: ActivatedRoute,
              private currentUserService: CurrentUserService) { }

  getReport() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.reportDetailedService.getReport(this.id).subscribe(report => {
      this.report = report;
      this.resolved = report.status === 'RESOLVED';
    })
  }

  getUser() {
    this.currentUserService.getUser().subscribe(user => {
      this.role = user.roles[0]['name'];
    })
  }

  ngOnInit(): void {
    this.getReport();
    this.getUser()
  }

}