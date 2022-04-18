import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/account/account.service';
import { ActionItem, ActionsService } from '../actions.service';

@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.scss']
})
export class AddActionComponent implements OnInit {
  form: FormGroup;
  id: string;
  isAddMode : boolean;
  constructor(private formBuilder : FormBuilder, private route : ActivatedRoute, private router : Router, private actionService: ActionsService, private accountService : AccountService) {
    if(!accountService.isAuthenticated()){
      this.router.navigate(["account/login"]);
    }
  }
  submit() : void{
    if (this.isAddMode) {
      this.create();
    } else {
      this.edit();
    }
    this.router.navigate(["/actions/"]);
  }
  create() : void{
    this.actionService.addAction({name: this.form.controls["name"].value, description: this.form.controls["description"].value, tag: this.form.controls["tag"].value, executionTime: this.form.controls["executionTime"].value, aspNetUserId: this.accountService.getUserId()}).subscribe(response=>{
  });
    // id: number;
    // name: string;
    // description: string;
    // executionTime: Date;
    // tag: string;
    // aspNetUserId: string;
    //this.actionService.addAction({});
  }
  edit() : void{


  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      description: [""],
      executionTime: [""],
      tag: [""],
    });
    if (!this.isAddMode) {
     // let c : Category = categoriesList.filter((el) => +this.id == el.id)[0];
      //this.form.patchValue(c);
    }
  }

}
