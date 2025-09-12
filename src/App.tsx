import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { categories, colors, formInputList, products } from "./data";
import Button from "./components/ui/Button";
import { useState } from "react";
import Input from "./components/ui/Input";
import type { IProduct } from "./interfaces";
import FormValidation from "./validations";
import ColorComponent from "./components/ColorComponent";
import DropdownList from "./components/ui/DropdownList";

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
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(emptyProduct);
  const [productListState, setProductListState] = useState(products);
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [selectedCategory, setselectedCategory] = useState(categories[0]);
  const [productToDelete, setProductToDelete] = useState<IProduct | null>(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    price: "",
    imageUrl: "",
  });
  const [productToEdit, setProductToEdit] = useState<IProduct>(productListState[0]);
  /*-------- Render --------*/
  const productList = productListState.map((product) => (
    <ProductCard key={product.id} product={product} setProductToEdit={setProductToEdit} openEdit={openEdit} setProductToDelete={setProductToDelete} openDelete={openDelete}/>
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
  const renderFormEditInputs = formInputList.map((input) => (
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
        value={productToEdit[input.name]}
        onChange={handleEditChange}
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

  function openEdit() {
    setIsEditOpen(true);
  }

  function closeEdit() {
    setIsEditOpen(false);
  }
  function openDelete() {
    setIsDeleteOpen(true);
  }
  function closeDelete() {
    setIsDeleteOpen(false);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors({
      ...errors,
      [name]: "",
    });
  }
  function handleEditChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setProductToEdit((prev) => ({
      ...prev,
      [name]: value,
    }));
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
    if (Object.values(errors).some((error) => error !== "")) {
      setErrors(errors);
      return;
    }
    const newProduct = {
      id: productListState.length + 1,
      ...product,
      colors: tempColor,
      category: selectedCategory,
    };
    setTempColor([]);
    setProductListState((prev) => [...prev, newProduct]);
    setProduct(emptyProduct);
    close();
  }
  function handleEditProduct() {
    const errors = FormValidation({
      title: productToEdit.title,
      description: productToEdit.description,
      price: productToEdit.price,
      imageUrl: productToEdit.imageUrl,
    });
    if (Object.values(errors).some((error) => error !== "")) {
      setErrors(errors);
      return;
    }
    const editedProduct = {
      ...productToEdit,
      colors: productToEdit.colors.concat(tempColor),
      category: selectedCategory,
    };
    setTempColor([]);
    setProductListState((prev) =>
      prev.map((prod) => (prod.id === editedProduct.id ? editedProduct : prod))
    );
    setProductToEdit(emptyProduct);
    closeEdit();
  }
  function toggleColor(selectedColor: string, edit: boolean = false) {
    if (edit) {
      setProductToEdit((prev) => ({
        ...prev,
        colors: prev.colors.includes(selectedColor)
          ? prev.colors.filter((c) => c !== selectedColor)
          : [...prev.colors, selectedColor],
      }));
    } else {
      setTempColor((prev) =>
        prev.includes(selectedColor)
          ? prev.filter((c) => c !== selectedColor)
          : [...prev, selectedColor]
      );
    }
  }
  function deleteProduct() {
    if (productToDelete) {
      setProductListState((prev) =>
        prev.filter((prod) => prod.id !== productToDelete.id)
      );
      setProductToDelete(null);
      closeEdit();
    }
  }



  return (
    <>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Product Catalog</h1>
            <p className="text-gray-600 mt-1">Manage your ecommerce products with ease</p>
          </div>
          <Button
            onClick={open}
            variant="primary"
            size="md"
            width="w-fit"
            className="shadow-sm"
          >
            Add New Product
          </Button>
        </div>

        <Modal isOpen={isOpen} close={close} title={"Add New Product"}>
          {renderFormInputs}
          {tempColor && (
            <div className="flex space-x-2 mt-2">
              <p className="self-center">Selected Colors:</p>
              {tempColor.map((color) => (
                <ColorComponent
                  color={color}
                  key={color}
                  onClick={() => toggleColor(color)}
                />
              ))}
            </div>
          )}
          <div className="flex space-x-2 mt-2">
            {colors.map((color) => (
              <ColorComponent color={color} key={color} onClick={() => toggleColor(color)}/>
            ))}
          </div>
          <DropdownList data={categories} setSelectedCategory={setselectedCategory}/>
          <div className="mt-4">
            <Button
              className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 align-content-center justify-center"
              onClick={(event)=>{
              event.preventDefault();
              handleAddProduct();
            }}
            >
              Submit
            </Button>
          </div>
        </Modal>

        <Modal isOpen={isDeleteOpen} close={closeDelete} title={"Delete Product"}>
          <div className="p-4">
            <h2 className="text-lg font-medium mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this product?</p>
            <div className="flex justify-end space-x-2 mt-4">
              <Button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                onClick={closeDelete}
              >
                Cancel
              </Button>
              <Button
                className="bg-red-600 text-white px-4 py-2 rounded-md"
                onClick={()=>{
                  deleteProduct();
                  closeDelete();
                }}
              >
                Delete
              </Button>
            </div>
          </div>
          
        </Modal>

        {productToEdit && (
          <Modal isOpen={isEditOpen} close={closeEdit} title={"Edit Product"}>
            {renderFormEditInputs}
            {tempColor && (
            <div className="flex space-x-2 mt-2">
              <p className="self-center">Selected Colors:</p>
              {productToEdit.colors.concat(tempColor).map((color) => (
                <ColorComponent
                  color={color}
                  key={color}
                  onClick={() => toggleColor(color, true)}
                />
              ))}
            </div>
            )}
            <div className="flex space-x-2 mt-2">
              {colors.map((color) => (
                <ColorComponent color={color} key={color} onClick={() => toggleColor(color, true)}/>
              ))}
            </div>
            <DropdownList data={categories} setSelectedCategory={setselectedCategory}/>
            <div className="mt-4">
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 align-content-center justify-center"
                onClick={handleEditProduct}
              >
                Edit
              </Button>
            </div>
          </Modal>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productList.length > 0 ? productList : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products yet</h3>
              <p className="text-gray-600 mb-4">Get started by adding your first product</p>
              <Button onClick={open} variant="outline" size="sm">
                Add Product
              </Button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
