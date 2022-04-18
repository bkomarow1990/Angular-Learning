import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { findIndex } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { ActionItem, ActionsService } from '../actions.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  actionItems: ActionItem[];

  constructor(private actionsService: ActionsService, private accountService: AccountService, private toastr: ToastrService) {

  }
  ngOnInit(): void {
    this.actionsService.getByUser(this.accountService.getUserId()).subscribe((data) => {
      this.actionItems = data;
    });
  }
  // //next => {
  //   this.actionItems.splice(this.actionItems.findIndex(el => el.id == id), 1);
  //   console.log("NEXT:", next);
  // },
  remove(id: number): void {
    this.actionsService.removeById(id).subscribe(next => {
         this.actionItems.splice(this.actionItems.findIndex(el => el.id == id), 1);
         this.toastr.error('Deleted', 'Sucefully deleted!', {
          timeOut: 3000,
        });
       },
      error => {
        this.toastr.error('Error', 'Error!', {
          timeOut: 3000,
        });
      });
  }
}
