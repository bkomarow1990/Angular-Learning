import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
              private accountService: AccountService,private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }
  submit(){
    this.login(this.form.value);
  }
  login(credentials: IUserCredentialsDTO) {
    this.accountService.login(credentials).subscribe(response => {
      // console.log(response);hi
      this.accountService.saveToken(response.token, response.userId);
      this.toastr.success('Succefully logined', 'Welcome!', {
        timeOut: 3000,
      });

      this.router.navigate(['']);
    }, error => {this.toastr.error('Enter correct data', 'Incorrect login or password!', {
      timeOut: 3000,
    });console.log(error)} );
  }

}
