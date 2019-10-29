import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;

  constructor(private apiService : ApiService) { 

    this.registerForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });
  }

  ngOnInit() {
  }

  rBtn() {
    console.log(this.registerForm);
    //this.registerForm.value['role'] = 'profile';
    this.apiService.register(this.registerForm.value).subscribe((data : any) => {
      console.log( data);
    });
  }

}
