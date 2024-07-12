import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
    `
      hr {
        display: none;
      }

      .scroll-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
        margin-top: 2em;
        height: 70vh;
        margin-top: 3em;
        padding-top: 1em;
        line-height: 2em;
        overflow-x: hidden;
        overflow-y: scroll;
        margin-right: 1.5em;
      }

      .scroll-container::-webkit-scrollbar {
        background-color: var(--white-off);
        border-radius: 1em;
      }

      .scroll-container::-webkit-scrollbar-thumb {
        background-color: var(--white-on);
        border-radius: 1em;
      }

      #about-me {
        padding-top: 2em;
        display: flex;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
        user-select: none;
        scroll-snap-align: start;
        min-height: 60vh;
      }

      #bio-container {
        display: grid;
        grid-template-columns: 2fr 3fr 3fr;
        width: 100vw;
        padding-top: 1em;
      }

      #photo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      figcaption {
        background-color: transparent;
      }

      .fig-name,
      .fig-title,
      .fig-ocupation {
        background-color: transparent;
        text-align: center;
        font-family: 'Amatic SC', cursive;
        opacity: 0.9;
      }

      .fig-title {
        font-size: 2em;
        color: var(--white-on);
      }

      .fig-ocupation {
        padding-left: 0.05em;
        font-size: 1em;
        color: var(--white_off);
        letter-spacing: 0.02em;
        border-bottom: 1px var(--white_off) solid;
      }

      .photo-item {
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: cover;
        object-position: center;
        width: 15em;
        height: 15em;
        border-radius: 100%;
        padding: 0.5em 0;
      }

      #description-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
      }

      .description-config-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }

      .description-items {
        padding-left: 0.5em;
      }

      .about-containers {
        margin: 1.5em 0;
      }

      .titles {
        padding: 0.25em 0;
        text-align: center;
        font-size: 2em;
        color: var(--white-off);
        margin: 0.25em 5em;
        border: 0.1em var(--white-off) solid;
        border-radius: 2em;
      }

      .active-desktop {
        margin: 0.25em 4.7em;
      }

      .about-titles {
        padding-right: 0.8em;
        font-size: 1.65em;
        color: var(--white_off);
      }

      .about-subtitles {
        text-align: justify;
        padding-right: 1.2em;
        font-size: 1.5em;
        color: var(--white-on);
      }

      .certification-items {
        padding: 1em 0.25em;
        font-size: 1.3em;
        color: var(--white-off);
      }

      /* Mobile */
      @media (min-width: 15em) and (max-width: 39.9em) {
        #about-me {
          padding-top: 7em;
          height: 100%;
          margin-bottom: 3em;
        }
        #bio-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100vw;
          padding-top: 1em;
        }
        #bio-container .fig-title {
          font-size: 2.5em;
          text-align: center;
        }
        #bio-container .fig-ocupation {
          font-size: 1em;
          text-align: center;
        }
        .photo-item {
          width: 11em;
          height: 11em;
        }
        .scroll-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 100vw;
          height: auto;
          margin-top: 2em;
          margin-right: 0;
          padding: 1em 0;
          line-height: 2em;
          overflow-y: hidden;
        }
        .description-config-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .about-containers {
          margin: 1em 0;
          width: 90%;
        }
        .about-titles {
          text-align: center;
          font-size: 1.2em;
          color: var(--white_off);
          padding-right: 0;
        }
        .about-subtitles {
          text-align: center;
          font-size: 1.2em;
          color: var(--white-on);
          padding-right: 0;
        }
        .scroll-container {
          padding: 0;
        }
        hr {
          margin: 2em 0;
          width: 90%;
        }
        .titles {
          margin: 0;
          padding: 0.3em 1.3em;
          font-size: 1.6em;
        }
      }

      /* Tablet */
      @media screen and (min-width: 40em) and (max-width: 63.9em) {
      }
    `,
  ],
})
export class AboutComponent implements OnInit, OnDestroy {
  josuehoenicka: any;
  experience: any;
  certification: any;

  private intervalId: any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.languageData.subscribe((data) => {
      this.josuehoenicka = data;
      this.experience = data.experience;
      this.certification = data.education;
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
