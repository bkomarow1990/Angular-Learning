import {Product} from "./Product";
export enum Step{
  InProcess, Canceled, Done
}
export class Order{
  products: Product[];
  step: Step;
}
