export type OptionValues = "S" | "M" | "L" | "XL";

export interface IProduct {
  id: string;
  image: string;
  price: number;
  name: string;
  options: IProductOption[];
}

interface IProductOption {
  label: string;
  values: OptionValues[];
}
