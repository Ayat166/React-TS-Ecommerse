export interface IProduct {
    id?: number;
    title: string;
    price: string;
    description: string;
    imageUrl: string;
    colors: string[];
    category: ICategory;
}
export interface ICategory {
    id: number;
    name: string;
    imageUrl: string;
}

export interface IFormInput {
    id:string;
    name: "title" | "price" | "description" | "imageUrl";
    label: string;
    type: string;
    placeholder: string;
}