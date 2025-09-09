import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { colors, formInputList, products } from "./data";
import Button from "./components/ui/Button";
import { useState } from "react";
import Input from "./components/ui/Input";
import type { IProduct } from "./interfaces";
import FormValidation from "./validations";
import ColorComponent from "./components/ColorComponent";

function App() {
  /*-------- Empty Product Template --------*/
  const emptyProduct: IProduct = {
    title: "",
    price: "",
    description: "",
    imageUrl: "",
    colors: [],
    category: { id: 0, name: "", imageUrl: "" },
  };

  /*-------- Modal State --------*/
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(emptyProduct);
  const [productListState, setProductListState] = useState(products);
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  /*-------- Render --------*/
  const productList = productListState.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const renderFormInputs = formInputList.map((input) => (
    <div key={input.id} className="flex flex-col gap-2">
      <label htmlFor={input.name} className="text-sm font-medium text-gray-700">
        {input.label}
      </label>
      <Input
        type={input.type}
        name={input.name}
        id={input.name}
        placeholder={input.placeholder}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={product[input.name]}
        onChange={handleChange}
      />
      {errors && <p className="text-red-500 text-sm">{errors[input.name]}</p>}
    </div>
  ));

  /*-------- Modal Handlers --------*/
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(product);
    setErrors({
      ...errors,
      [name]: "",
    });
  }

  function handleAddProduct() {
    const errors = FormValidation({
      title: product.title,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl,
    });
    console.log(errors);
    if (Object.values(errors).some((error) => error !== "")) {
      setErrors(errors);
      return;
    }
    const newProduct = {
      id: productListState.length + 1,
      ...product,
      colors: tempColor,
    };
    console.log(newProduct);
    setTempColor([]);
    setProductListState((prev) => [...prev, newProduct]);
    setProduct(emptyProduct);
    close();
  }
  function toggleColor(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    const selectedColor = e.currentTarget.style.backgroundColor;
    setTempColor((prev) => {
      if (prev.includes(selectedColor)) {
        return prev.filter((color) => color !== selectedColor);
      } else {
        return [...prev, selectedColor];
      }     
    })
  }

  return (
    <>
      <main className="container mx-auto lg:auto mt-5">
        <div className="flex justify-end p-4">
          <Button
            onClick={open}
            className="rounded-md bg-black/50 px-4 py-2 text-sm font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"
            width="w-fit"
          >
            New Item
          </Button>
        </div>

        <Modal isOpen={isOpen} close={close}>
          {renderFormInputs}
          {tempColor && (
            <div className="flex space-x-2 mt-2">
              <p className="self-center">Selected Colors:</p>
              {tempColor.map((color) => (
                <ColorComponent
                  color={color}
                  key={color}
                  onClick={toggleColor}
                />
              ))}
            </div>
          )}
          <div className="flex space-x-2 mt-2">
            {colors.map((color) => (
              <ColorComponent color={color} key={color} onClick={toggleColor}/>
            ))}
          </div>
          <div className="mt-4">
            <Button
              className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 align-content-center justify-center"
              onClick={handleAddProduct}
            >
              Submit
            </Button>
          </div>
        </Modal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 align-items-center justify-items-center p-4">
          {productList}
        </div>
      </main>
    </>
  );
}

export default App;
