import { Component, OnInit } from '@angular/core';
import {Order} from "./shop/Order";
import {orderList} from "./shop/order-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproj';

  doneOrders: Order[];
  orders: Order[];

  ngOnInit(): void{
    this.doneOrders = orderList.filter((o)=> o.step == 2);
    this.orders = orderList;
  }
}
