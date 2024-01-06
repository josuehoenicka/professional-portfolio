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
  name = ["Josue Hoenicka"];
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
    let _i = 0;
    let occupation = this.name[_i];
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
        _i++;
        if (_i >= this.name.length) {
          _i = 0;
        }
        occupation = this.name[_i];
        this.intervalId = setTimeout(addLetter, time);
      }
    };

    this.intervalId = setTimeout(addLetter, time);
  }

}
