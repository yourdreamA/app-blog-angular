import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private apiService : ApiService, private router: Router) {

    this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
   }


  ngOnInit() {
  }

  loginBtn() {
    console.log(this.loginForm);

    this.apiService.login(this.loginForm.value).subscribe((data : any) => {
      console.log( data);
      if (data.message === 'OK') {
        this.apiService.saveToken(data.accessToken);
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

  

}
