import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent  {

  josuehoenicka: any;
  activeMenu = false;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.languageData.subscribe(data => {
      this.josuehoenicka = data;
    });
  }

  onChangeLanguage(event: any) {
    const language = event.target.value;
    this.portfolioService.changeLanguage(language);
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  downloadCV() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../../assets/personal/resume.pdf');
    link.setAttribute('download', 'resume.pdf');
    link.click();
  }

}
