import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent {

  josuehoenicka: any;
  lang:any;
  tech:any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.languageData.subscribe(data => {
      this.josuehoenicka = data;
      this.lang= data.languages;
      this.tech= data.techs;
    });
  }

}
