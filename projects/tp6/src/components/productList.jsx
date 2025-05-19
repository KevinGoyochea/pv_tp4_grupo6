import ProductItem from "./ProductItem";

function ProductList({ products, updateProduct, deleteProduct }) {
  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} updateProduct={updateProduct} deleteProduct={deleteProduct} />
      ))}
    </ul>
  );
}

export default ProductList;
