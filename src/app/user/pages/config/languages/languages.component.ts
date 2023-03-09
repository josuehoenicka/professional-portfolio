import { Component, OnInit } from '@angular/core';

import { PortfolioService } from 'src/app/services/portfolio.service';
import { Location } from '@angular/common'


@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class ConfigLanguagesComponent implements OnInit {

  name:any;
  lang:any;
  tech:any;

  constructor(private check:PortfolioService, private _location: Location) { }


  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
    this.check.test().subscribe(data => {
      this.name=data;
      this.lang=data.languages;
      this.tech=data.techs;
    });
  }

}
