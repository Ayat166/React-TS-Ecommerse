import type { IProduct } from "../interfaces"
import ImageComponent from "./ImageComponent"
import Button from "./ui/Button"
import { splitString } from "../utils"
interface ProductCardProps {
  product:IProduct
}

function ProductCard({product}: ProductCardProps) {

  const {title,description,price,imageUrl,colors,category}=product;

  return (
    <div className="border border-gray-200 rounded shadow align-items-center space-y-2">
        <ImageComponent src={imageUrl} alt={title} className="p-1 rounded-lg"/>
        <h2 className="font-semibold pl-2 text-lg">{title}</h2>
        <p className="font-extralight pl-2 text-gray-600 text-sm">{splitString(description,50)}</p>
        <div className="flex space-x-2 pl-2 ">
             {colors.map((color,index)=>(
              <span key={index} className={`w-5 h-5 rounded-full inline-block cursor-pointer`} style={{backgroundColor:color}} />
             ))}
             

        </div>
        <div className="flex space-x-4 justify-between items-center px-4">
            <p>{price}</p>
            <ImageComponent src={category.imageUrl} alt={category.name} className="w-10 h-10 rounded-full "/>
        </div>
        <div className="flex space-x-2 justify-between items-center p-2">
            <Button className=" bg-blue-800" width="w-full" >Edit</Button>
            <Button className=" bg-red-800" width="w-full">Distroy</Button>
        </div>
    </div>
  )
}

export default ProductCard
