export enum OptionValues {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

export interface IProduct {
  id: string;
  image: string;
  price: number;
  name: string;
  options: IProductOption[];

  total?: number;
}

interface IProductOption {
  label: string;
  values: OptionValues[];
}
