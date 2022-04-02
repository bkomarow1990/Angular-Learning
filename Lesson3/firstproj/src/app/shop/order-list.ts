import {Order, Step} from "./Order";

export const orderList: Order[] = [
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
