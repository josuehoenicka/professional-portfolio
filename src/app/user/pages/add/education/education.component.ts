import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class AddEducationComponent implements OnInit {

  constructor(private _location: Location)
  {}

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
  }
}
