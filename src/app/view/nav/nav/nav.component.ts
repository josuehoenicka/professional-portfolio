import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent  {

  activeMenu = false;

  constructor(private portfolioService: PortfolioService) {}

  onChangeLanguage(event: any) {
    const language = event.target.value;
    this.portfolioService.changeLanguage(language);
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

}
