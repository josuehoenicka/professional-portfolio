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
  occupations = ["JavaScript Developer", "TypeScript Developer", "Python Developer"];
  public currentOccupation: string = "";

  private intervalId: any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.languageData.subscribe(data => {
      this.josuehoenicka = data;
      this.experience = data.experience;
      this.certification = data.education;
    });
    this.startAnimatingTitle();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAnimatingTitle() {
    let occupationIndex = 0;
    let occupation = this.occupations[occupationIndex];
    let i = 0;
    const time = 100;

    const addLetter = () => {
      this.currentOccupation += occupation.charAt(i);
      i++;
      if (i < occupation.length) {
        this.intervalId = setTimeout(addLetter, time);
      } else {
        setTimeout(deleteLetter, 1000);
      }
    };

    const deleteLetter = () => {
      this.currentOccupation = this.currentOccupation.slice(0, -1);
      i--;
      if (i >= 0) {
        this.intervalId = setTimeout(deleteLetter, time);
      } else {
        occupationIndex++;
        if (occupationIndex >= this.occupations.length) {
          occupationIndex = 0;
        }
        occupation = this.occupations[occupationIndex];
        this.intervalId = setTimeout(addLetter, time);
      }
    };

    this.intervalId = setTimeout(addLetter, time);
  }

}
