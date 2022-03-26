import { Component, OnInit } from '@angular/core';
import {Product} from "./Product";
import {Order, Step} from "./Order";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  orders: Order[];
  constructor() { }

  ngOnInit(): void {
    this.orders = [
      {
        products:  [{
          id: 1,
          name: "bread",
          price: 15,
          sellDate: new Date()
        },
      {
        id: 2,
        name: "oil",
        price: 26,
        sellDate: new Date()
      }],
      step: Step.Done
      },
      {
        products:  [{
          id: 1,
          name: "bread",
          price: 15,
          sellDate: new Date()
        },
          {
            id: 2,
            name: "oil",
            price: 26,
            sellDate: new Date()
          }],
        step: Step.InProcess
      },
      {
        products:  [{
          id: 1,
          name: "bread",
          price: 15,
          sellDate: new Date()
        },
          {
            id: 2,
            name: "oil",
            price: 26,
            sellDate: new Date()
          }],
        step: Step.Canceled
      }
    ];
  }

}
