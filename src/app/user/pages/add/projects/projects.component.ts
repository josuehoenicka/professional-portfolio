import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class AddProjectsComponent implements OnInit {

  constructor(private _location: Location)
  {}

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
  }

}
