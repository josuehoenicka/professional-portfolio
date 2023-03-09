import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-argprog',
  templateUrl: './argprog.component.html',
  styleUrls: ['./argprog.component.scss']
})
export class ArgprogComponent implements OnInit {

  constructor(private _location: Location)
  {}

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

}
