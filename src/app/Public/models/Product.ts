export class Product {
    category!: string;
    productDescription!: string;
    productImages!: { image_url: string; _id: string }[];
    productName!: string;
    productPrice!: number;
    authorName! : string;
    stock!: number;
    tags!: any[];
    _id!: string;
  }