import ImageComponent from "./ImageComponent"
import Button from "./ui/Button"

function ProductCard() {
  return (
    <div className="border border-gray-200 rounded shadow align-items-center space-y-2">
        <ImageComponent src="https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_1280,c_limit/DSC_5903.jpg" alt="Car  Image" className="p-1 rounded-lg"/>
        <h2 className="font-semibold pl-2 text-lg">Product Name</h2>
        <p className="font-extralight pl-2 text-gray-600 text-sm">Product Description</p>
        <div className="flex space-x-2 pl-2 ">
            <span className="w-5 h-5 bg-blue-500 rounded-full inline-block cursor-pointer" />
            <span className="w-5 h-5 bg-red-500 rounded-full inline-block cursor-pointer" />
            <span className="w-5 h-5 bg-green-500 rounded-full inline-block cursor-pointer" />

        </div>
        <div className="flex space-x-4 justify-between items-center px-4">
            <p>$19.99</p>
            <ImageComponent src="https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_1280,c_limit/DSC_5903.jpg" alt="Car  Image" className="w-10 h-10 rounded-full "/>
        </div>
        <div className="flex space-x-2 justify-between items-center p-2">
            <Button className=" bg-blue-800" width="w-full" >Edit</Button>
            <Button className=" bg-red-800" width="w-full">Distroy</Button>
        </div>
    </div>
  )
}

export default ProductCard
