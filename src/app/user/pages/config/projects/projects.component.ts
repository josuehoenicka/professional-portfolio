import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ConfigProjectsComponent implements OnInit {

  name:any;
  project:any;
  constructor(private check:PortfolioService, private _location: Location) { }

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
    this.check.test().subscribe(data => {
      this.name=data;
      this.project=data.projects;
    });
  }

}
