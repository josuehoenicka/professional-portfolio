import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,100&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Explora&display=swap');

      nav {
        position: fixed;
        display: flex;
        width: 100vw;
        height: 15vh;
        user-select: none;
        z-index: 1000;
        margin: 0.5em 0;
      }

      .show-mobile {
        display: none;
      }

      .navbar-container {
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .navbar-container select {
        text-align: center;
        color: var(--white-off);
        font-size: 2.5em;
        margin-left: 0.5em;
        padding: 0 0.5em;
        font-weight: bold;
        transition: 0.5s;
        cursor: pointer;
        border-radius: 2em;
        -webkit-appearance: none;
        -moz-appearance: none;
      }

      .navbar-container select::-ms-expand {
        display: none;
      }

      .navbar-container select:focus {
        outline: none;
        box-shadow: none;
      }

      .navbar-container option[disabled] {
        color: #000000;
        background-color: #808080 !important;
      }

      .navbar-container .navbar-title:hover {
        color: var(--white-on);
      }

      .navbar-container .navbar-items {
        color: var(--white-off);
        font-size: 1.9em;
        margin-right: 1.5em;
      }

      .navbar-container .navbar-items:hover {
        color: var(--white-on);
      }

      .navbar-container .btn-navbar {
        font-size: 1.9em;
        color: var(--white-on);
        padding: 0.35em 1em;
        border-radius: 2em;
        background-color: var(--white-off);
        color: var(--black-on);
        margin-right: 0.25em;
        transition: 0.5s;
        cursor: pointer;
      }

      .navbar-container .btn-navbar:hover {
        background-color: var(--white-on);
      }

      /* Mobile */
      @media (min-width: 15em) and (max-width: 39.9em) {
        nav {
          margin: 0;
        }
        .logo-nav-container,
        .navbar-container {
          display: none;
        }
        .show-mobile {
          display: block;
          z-index: 1000 !important;
          position: fixed;
          width: 100vw;
          background-color: #000000;
          box-shadow: 0px 2px 5px rgb(black, 0.2);
        }
        .show-mobile > div {
          padding: 1em;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .show-mobile button {
          border: 0;
          background: transparent;
        }
        .show-mobile button img {
          width: 4em;
        }
        .side-menu {
          z-index: 200;
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start !important;
          text-align: center !important;
          transform: translateX(-100%);
          transition: all ease-out 0.7s;
        }
        .side-menu.active {
          transform: translateX(0);
        }
        .side-menu button {
          display: flex;
          width: 100%;
          justify-content: flex-end;
          font-family: 'Anton', sans-serif;
          font-size: 3.5em;
          color: red;
        }
        .side-menu ul {
          list-style: none;
        }
        .side-menu ul li {
          font-size: 4em;
          margin: 0.5em 0;
          color: var(--white-on);
        }
        .side-menu ul li a {
          font-family: 'Amatic SC', cursive;
          text-decoration: none;
          color: var(--white-on);
        }
        .nav-name {
          font-family: 'Amatic SC', cursive;
          font-size: 3.2em;
          color: var(--white-on);
        }
        select {
          text-align: center;
          color: var(--white-off);
          font-size: 2em;
          margin-left: 0.5em;
          padding: 0 0.5em;
          font-weight: bold;
          transition: 0.5s;
          cursor: pointer;
          border-radius: 2em;
          -webkit-appearance: none;
          -moz-appearance: none;
        }
        select::-ms-expand {
          display: none;
        }
        select:focus {
          outline: none;
          box-shadow: none;
        }
        option {
          text-align: center;
          padding: 0 0;
          font-size: 1.5em;
        }
        option[disabled] {
          color: #000000;
          background-color: #808080 !important;
        }
      }

      /* Tablet */
      @media screen and (min-width: 40em) and (max-width: 63.9em) {
      }
    `,
  ],
})
export class NavComponent {
  josuehoenicka: any;
  activeMenu = false;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.languageData.subscribe((data) => {
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
}
