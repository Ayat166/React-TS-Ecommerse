import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/modal";
import { formInputList, products } from "./data";
import Button from "./components/ui/Button";
import { useState } from "react";
import Input from "./components/ui/Input";
import type { IProduct } from "./interfaces";

function App() {
  /*-------- Modal State --------*/
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>({
    title: "",
    price: 0,
    description: "",
    imageUrl: "",
    colors: [],
    category: { id: 0, name: "", imageUrl: "" },
  });

  /*-------- Render --------*/
  const productList = products.map((product) => (
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
      [name]: name === "price" ? parseFloat(value) : value,
    }));
    console.log(product);
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
        </Modal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 align-items-center justify-items-center p-4">
          {productList}
        </div>
      </main>
    </>
  );
}

export default App;
