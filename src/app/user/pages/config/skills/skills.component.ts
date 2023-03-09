import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-config-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class ConfigSkillsComponent implements OnInit {
  name:any;
  tech:any;
  constructor(private check:PortfolioService, private _location: Location) { }

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
    this.check.test().subscribe(data => {
      this.name=data;
      this.tech=data.techs;
    });
  }

}
