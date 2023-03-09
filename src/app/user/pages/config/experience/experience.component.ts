import { Component, OnInit } from '@angular/core';

import { PortfolioService } from 'src/app/services/portfolio.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ConfigExperienceComponent implements OnInit {

  name:any;
  exp:any;

  constructor(private check:PortfolioService, private _location: Location)
  {}

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
    this.check.test().subscribe(data => {
      this.name=data;
      this.exp=data.experience;
    });
  }
}
