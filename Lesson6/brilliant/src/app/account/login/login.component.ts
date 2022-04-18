import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserCredentialsDTO } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
    this.accountService.login(credentials).subscribe(response => {
      console.log(response);
      this.accountService.saveToken(response.token);
    }, error => console.error(error));
  }

}
