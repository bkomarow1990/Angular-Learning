import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IUserCredentialsDTO } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private accountService: AccountService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }
  submit(){
    this.register(this.form.value);
  }
  register(credentials: IUserCredentialsDTO) {
    this.accountService.register(credentials).subscribe(response => {
      // console.log(response);hi
      this.toastr.success('Registered!', 'Welcome!', {
        timeOut: 3000,
      });

    }, error => {this.toastr.error('Enter correct data', 'Incorrect login or password', {
      timeOut: 3000,
    }); console.log(error)});
  }
}
