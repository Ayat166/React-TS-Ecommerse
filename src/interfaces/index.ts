export interface IProduct {
    id: number;
    title: string;
    price: number;
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