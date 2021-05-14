import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../model/user.model';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  registerForm!: FormGroup ;
  submitted = false;
  UserModel : UserModel [] = [];
  IsRegistered = false;
  IsLocalStoragehasValue = false;
  constructor(private fb: FormBuilder, private loginservice: LoginService, private router: Router) { 
    this.IsLocalStoragehasValue = this.loginservice.getuserModel() != null;
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fname:['', Validators.required],
      nname:['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    },
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(this.registerForm.valid)
    {
      this.submitted = false;
      this.UserModel.push({
        Email : this.registerForm.controls["email"].value,
        Fname : this.registerForm.controls["fname"].value,
        NName : this.registerForm.controls["nname"].value
      });
      this.loginservice.login(this.UserModel[0]);
      this.IsRegistered = true;
      this.IsLocalStoragehasValue = this.loginservice.getuserModel() != null;
      this.registerForm.reset();
    }
  }


}
