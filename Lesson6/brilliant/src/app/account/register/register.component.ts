import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../account.service";
import {IUserCredentialsDTO} from "../account";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private accountService: AccountService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required] // add regexp
    });
  }

  submit() {
    // validation and show errors
    this.login(this.form.value);
  }

  login(credentials: IUserCredentialsDTO) {
    this.accountService.register(credentials).subscribe(response => {
      console.log(response);
    }, error => console.error(error));
  }


}
