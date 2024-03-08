import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  josuehoenicka: any;
  experience: any;
  certification: any;

  private intervalId: any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.languageData.subscribe(data => {
      this.josuehoenicka = data;
      this.experience = data.experience;
      this.certification = data.education;
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }


}
