import type { defaultPostFake } from "./PostFake";

export interface Category{
  id:number;
  name:string;
  is_active:boolean;
}

export const defaultCategory:Category={
  id: 0,
  name:'',
  is_active:false
}