import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {AuthService} from "../services/authservice";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }
  ngOnInit() {}
  loginUser() {
    console.log(this.signinForm.value);
    this.authService.signIn(this.signinForm.value).subscribe(response=>{
      console.log(response);

        console.log(window.localStorage.setItem('access_token',response.token));

       this.router.navigate(["/Menu"])
    })

  }

}
