import { Component, OnInit } from '@angular/core';
import {Order} from "../../../../Lesson3/firstproj/src/app/shop/Order";
import {orderList} from "../../../../Lesson3/firstproj/src/app/shop/order-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lesson4';
  doneOrders: Order[];
  orders: Order[];
  ngOnInit(): void{
    this.doneOrders = orderList.filter((o)=> o.step == 2);
    this.orders = orderList;
  }
}
