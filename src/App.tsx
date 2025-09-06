import ProductCard from "./components/ProductCard";

function App() {

  return (
    <>
    <main className="container mx-auto lg:auto">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 align-items-center justify-items-center p-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
       </div>
      </main>
    </>
  );
}

export default App;
