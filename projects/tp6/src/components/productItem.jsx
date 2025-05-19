function ProductItem({ product, updateProduct, deleteProduct }) {
  return (
    <li>
      <strong>{product.nombre}</strong> - {product.marca} - ${product.precioConDescuento} - Stock: {product.stock}
      <button onClick={() => updateProduct({ ...product, nombre: prompt("Nuevo nombre:", product.nombre) })}>Editar</button>
      <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
    </li>
  );
}

export default ProductItem;
