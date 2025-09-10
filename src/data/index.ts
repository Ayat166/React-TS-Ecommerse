import type { ICategory, IFormInput, IProduct } from "../interfaces";

export const products : IProduct []= [
    {
        id: 1,
        title: "Product 1",
        price: "$19.99",
        description: "This is a description for Product 1 Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo tempora commodi nemo facilis pariatur? Quasi beatae porro, in ad esse rerum obcaecati molestiae aspernatur molestias magni veniam, libero laudantium sunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt tenetur saepe officia! Libero saepe error hic cupiditate alias illum, cumque sapiente atque aut expedita aliquid deserunt culpa odit quod pariatur iure repellat, possimus assumenda eligendi temporibus dolorum fuga? Culpa earum, repellat at maxime doloribus perferendis eveniet quisquam molestias ut quaerat!",
        imageUrl: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_1280,c_limit/DSC_5903.jpg",
        colors: ["#000000", "#FF0000", "#00FF00"],
        category :{
            id: 1,
            name: "Category 1",
            imageUrl: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_1280,c_limit/DSC_5903.jpg"
        }
    },
    {
        id: 2,
        title: "Product 2",
        price: "$29.99",
        description: "This is a description for Product 2 Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo tempora commodi nemo facilis pariatur? Quasi beatae porro, in ad esse rerum obcaecati molestiae aspernatur molestias magni veniam, libero laudantium sunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt tenetur saepe officia! Libero saepe error hic cupiditate alias illum, cumque sapiente atque aut expedita aliquid deserunt culpa odit quod pariatur iure repellat, possimus assumenda eligendi temporibus dolorum fuga? Culpa earum, repellat at maxime doloribus perferendis eveniet quisquam molestias ut quaerat!",
        imageUrl: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_1280,c_limit/DSC_5903.jpg",
        colors: ["#000000", "#FF0000", "#00FF00"],
        category :{
            id: 1,
            name: "Category 1",
            imageUrl: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_1280,c_limit/DSC_5903.jpg"
        }
    },
    {
        id: 3,
        title: "Product 3",
        price: "$39.99",
        description: "This is a description for Product 3 Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo tempora commodi nemo facilis pariatur? Quasi beatae porro, in ad esse rerum obcaecati molestiae aspernatur molestias magni veniam, libero laudantium sunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt tenetur saepe officia! Libero saepe error hic cupiditate alias illum, cumque sapiente atque aut expedita aliquid deserunt culpa odit quod pariatur iure repellat, possimus assumenda eligendi temporibus dolorum fuga? Culpa earum, repellat at maxime doloribus perferendis eveniet quisquam molestias ut quaerat!",
        imageUrl: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_1280,c_limit/DSC_5903.jpg",
        colors: ["#000000", "#FF0000", "#00FF00"],
        category :{
            id: 1,
            name: "Category 1",
            imageUrl: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_1280,c_limit/DSC_5903.jpg"
        }
    },
    {
        id: 4,
        title: "Product 4",
        price: "$19.99",
        description: "This is a description for Product 4 Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo tempora commodi nemo facilis pariatur? Quasi beatae porro, in ad esse rerum obcaecati molestiae aspernatur molestias magni veniam, libero laudantium sunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt tenetur saepe officia! Libero saepe error hic cupiditate alias illum, cumque sapiente atque aut expedita aliquid deserunt culpa odit quod pariatur iure repellat, possimus assumenda eligendi temporibus dolorum fuga? Culpa earum, repellat at maxime doloribus perferendis eveniet quisquam molestias ut quaerat!",
        imageUrl: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_1280,c_limit/DSC_5903.jpg",
        colors: ["#000000", "#FF0000", "#00FF00"],
        category :{
            id: 1,
            name: "Category 1",
            imageUrl: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_1280,c_limit/DSC_5903.jpg"
        }
    },
    {
        id: 5,
        title: "Product 5",
        price: "$29.99",
        description: "This is a description for Product 5 Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo tempora commodi nemo facilis pariatur? Quasi beatae porro, in ad esse rerum obcaecati molestiae aspernatur molestias magni veniam, libero laudantium sunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt tenetur saepe officia! Libero saepe error hic cupiditate alias illum, cumque sapiente atque aut expedita aliquid deserunt culpa odit quod pariatur iure repellat, possimus assumenda eligendi temporibus dolorum fuga? Culpa earum, repellat at maxime doloribus perferendis eveniet quisquam molestias ut quaerat!",
        imageUrl: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_1280,c_limit/DSC_5903.jpg",
        colors: ["#000000", "#FF0000", "#00FF00"],
        category :{
            id: 1,
            name: "Category 1",
            imageUrl: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_1280,c_limit/DSC_5903.jpg"
        }
    },
    {
        id: 6,
        title: "Product 6",
        price: "$39.99",
        description: "This is a description for Product 6 Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo tempora commodi nemo facilis pariatur? Quasi beatae porro, in ad esse rerum obcaecati molestiae aspernatur molestias magni veniam, libero laudantium sunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt tenetur saepe officia! Libero saepe error hic cupiditate alias illum, cumque sapiente atque aut expedita aliquid deserunt culpa odit quod pariatur iure repellat, possimus assumenda eligendi temporibus dolorum fuga? Culpa earum, repellat at maxime doloribus perferendis eveniet quisquam molestias ut quaerat!",
        imageUrl: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_1280,c_limit/DSC_5903.jpg",
        colors: ["#000000", "#FF0000", "#00FF00"],
        category :{
            id: 1,
            name: "Category 1",
            imageUrl: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_1280,c_limit/DSC_5903.jpg"
        }
    }
    
]

export const formInputList: IFormInput[] = [
    {
        id: "title",
        name: "title",
        label: "Product Title",
        type: "text",
        placeholder: "Enter product title"
    },
    {
        id: "price",
        name: "price",
        label: "Price",
        type: "text",
        placeholder: "Enter product price"
    },
    {
        id: "description",
        name: "description",
        label: "Description",
        type: "text",
        placeholder: "Enter product description"
    },
    {
        id: "image",
        name: "imageUrl",
        label: "Product Image URL",
        type: "text",
        placeholder: "Enter product image URL"
    },
]

export const colors : string[] = [
  "#000000",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FFA500",
  "#800080",
];

export const categories : ICategory [] = [
    {
        id: 1,
        name: "Car",
        imageUrl: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_1280,c_limit/DSC_5903.jpg"
    },
    {
        id: 2,
        name: "Clothes",
        imageUrl: "https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
        id: 3,
        name: "Phone",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/hf2CQvHr9KNtKuUSDkeQVH.jpg"
    }
]