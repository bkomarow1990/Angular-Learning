import { Component, Input, OnInit } from '@angular/core';
import {Product} from "./Product";
import {Order, Step} from "./Order";
import {orderList} from "./order-list";
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  constructor() { }
  orders : Order[] = orderList;
  removeOrder(index : number) : void {
    orderList.splice(index,1);
  }
  doneOrder(index : number) : void {
    orderList[index].step = 2;
  }
  ngOnInit(): void {
    // this.orders =
  }

}
