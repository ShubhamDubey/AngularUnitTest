import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  loginForm: FormGroup;
  constructor(loginFB: FormBuilder) {

    this.loginForm = loginFB.group({

      name: ['', Validators.required],
      password: ['', Validators.minLength(8)],
      email: ['', Validators.email]

    })

  }

  ngOnInit(): void {
  }

}