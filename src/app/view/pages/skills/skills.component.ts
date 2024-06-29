import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: [
    `
      #skills {
        display: grid;
        grid-template-columns: 6fr 3fr;
        width: 100vw;
        height: 100vh;
        user-select: none;
        padding-top: 1em;
      }

      #tech-container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 3.8em;
      }

      #tech-grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding-top: 1em;
      }

      .tech-items {
        width: 6em;
        height: 6em;
        margin: 1.5em 3em;
        background-color: transparent;
      }

      .techBg {
        margin: 1.5em 2em 1em 2em;
        width: 70%;
        object-fit: cover;
      }

      .tech-items:hover {
        cursor: pointer;
      }

      .si,
      .SI,
      .Si,
      .sI {
        opacity: 0.8;
      }

      .no,
      .NO,
      .No,
      .nO {
        opacity: 0.2;
      }

      #lang-container-mobile {
        display: none;
      }

      #lang-container-desktop {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
        padding-top: 5.5em;
      }

      .lang-items {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      .lang-items > p {
        padding-left: 0.5em;
      }

      .lvl-items {
        color: var(--white-on);
        font-size: 2.5em;
      }

      .flag-items {
        border-radius: 100%;
        width: 5em;
        padding: 2em 0.5em;
        cursor: pointer;
      }

      /* Mobile */
      @media (min-width: 15em) and (max-width: 49em) {
        #skills {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          user-select: none;
        }
        #tech-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        #tech-grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding-top: 0;
        }
        #lang-container-desktop {
          display: none;
        }
        #lang-container-mobile {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          padding-top: 3em;
        }
        .lang-items {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .lang-items:hover > p {
          color: var(--white-on);
          transition: 0.5s;
          padding-left: 0.7em;
          cursor: pointer;
        }
        .tech-items {
          width: 4.5em;
          height: 4.5em;
          margin: 1em 1em;
          background-color: transparent;
        }
        .lvl-items {
          display: none;
        }
        .flag-items {
          width: 4.5em;
          margin: 0 1em;
        }
      }
    `,
  ],
})
export class SkillsComponent {
  josuehoenicka: any;
  lang: any;
  tech: any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.languageData.subscribe((data) => {
      this.josuehoenicka = data;
      this.lang = data.languages;
      this.tech = data.techs;
    });
  }
}
