import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
    `
      #contact {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        user-select: none;
      }

      #social-container {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
        margin-top: 4.5em;
      }

      .social-title {
        color: var(--white-off);
      }

      .social-title:hover {
        color: var(--white-on);
        transition: 0.5s;
      }

      .social-items {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      .social-items > a {
        padding-left: 0.3em;
      }

      .social-items:hover > a {
        color: var(--white-on);
        cursor: pointer;
        transition: 0.5s;
      }

      .social-items:hover > .fa {
        color: var(--white-on);
        cursor: pointer;
        transition: 0.3s;
      }

      .social-title {
        font-size: 4em;
        padding-right: 0.5em;
      }

      /* Mobile */
      @media (min-width: 15em) and (max-width: 39.9em) {
        #contact {
          padding-left: 2em;
        }
        .social-title {
          display: none;
        }
        .fa-social {
          color: var(--white-on) !important;
          font-size: 7em !important;
        }
      }
    `,
  ],
})
export class ContactComponent {
  josuehoenicka: any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.languageData.subscribe((data) => {
      this.josuehoenicka = data;
    });
  }
}
