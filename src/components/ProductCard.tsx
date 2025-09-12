import type { IProduct } from "../interfaces"
import ImageComponent from "./ImageComponent"
import Button from "./ui/Button"
import { splitString } from "../utils"
import ColorComponent from "./ColorComponent"
interface ProductCardProps {
  product:IProduct,
  setProductToEdit: (product:IProduct)=>void,
  openEdit: ()=>void,
  setProductToDelete: (product:IProduct)=>void,
  openDelete: ()=>void,
}

function ProductCard({product,setProductToEdit,openEdit,setProductToDelete,openDelete}: ProductCardProps) {

  const {title,description,price,imageUrl,colors,category}=product;

  return (
    <div className="group relative bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
            <ImageComponent 
                src={imageUrl} 
                alt={title} 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
        </div>
        
        <div className="p-4 space-y-3">
            <div className="flex items-start justify-between">
                <h2 className="font-semibold text-lg text-gray-900 line-clamp-1">{title}</h2>
                <span className="text-sm font-bold text-blue-600 ml-2">${price}</span>
            </div>
            
            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{splitString(description, 60)}</p>
            
            <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">Colors:</span>
                <div className="flex space-x-1">
                    {colors.slice(0, 5).map((color) => (
                        <ColorComponent 
                            color={color} 
                            key={color} 
                            className="w-4 h-4 ring-2 ring-white shadow-sm"
                        />
                    ))}
                    {colors.length > 5 && (
                        <span className="text-xs text-gray-400">+{colors.length - 5}</span>
                    )}
                </div>
            </div>
            
            <div className="flex items-center space-x-2 pt-2 border-t border-gray-100">
                <ImageComponent 
                    src={category.imageUrl} 
                    alt={category.name} 
                    className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-xs text-gray-600 font-medium">{category.name}</span>
            </div>
        </div>
        
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/95 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-2">
                <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2" 
                    width="w-full" 
                    onClick={(event) => {
                        event.preventDefault();
                        setProductToEdit(product);
                        openEdit();
                    }}
                >
                    Edit
                </Button>
                <Button 
                    className="bg-red-600 hover:bg-red-700 text-white text-sm py-2" 
                    width="w-full" 
                    onClick={(event) => {
                        event.preventDefault();
                        setProductToDelete(product);
                        openDelete();
                    }}
                >
                    Delete
                </Button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
