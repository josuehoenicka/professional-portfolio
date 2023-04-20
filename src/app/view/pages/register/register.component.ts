import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  nameRegister!:any;
  emailRegister!:any;
  password!:any;
  descriptionRegister!: string;
  passwordRegister!:any;
  passwordRequired = 8;
  confirmPasswordRegister!: any;
  confirmPasswordRegister2 = null || undefined || 0;

  constructor() { }

  ngOnInit(): void {
  }

}
