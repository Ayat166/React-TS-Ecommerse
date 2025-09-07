import ProductCard from "./components/ProductCard";
import { products } from "./data";

function App() {
  const productList = products.map((product)=><ProductCard key={product.id} product={product} />)
  return (
    <>
    <main className="container mx-auto lg:auto">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 align-items-center justify-items-center p-4">
        {productList}
       </div>
      </main>
    </>
  );
}

export default App;
