import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private defaultUrl = './assets/data/english.json';
  languageData = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {
    this.loadData(this.defaultUrl);
  }

  loadData(url: string) {
    this.http.get(url).subscribe(data => {
      this.languageData.next(data);
    });
  }

  changeLanguage(language: string) {
    const url = `./assets/data/${language}.json`;
    this.loadData(url);
  }

}
