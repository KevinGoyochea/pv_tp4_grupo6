import { useState } from "react";

function ProductForm({ addProduct }) {
  const [product, setProduct] = useState({
    id: "", // Agregado para permitir entrada manual
    nombre: "",
    marca: "",
    descripcion: "",
    precioUnitario: "",
    descuento: "",
    stock: "",
  });

  const handleChange = (e) => {
  const { name, value } = e.target;

  setProduct({
    ...product,
    [name]: name === "id" ? Number(value) : value, // Convierte ID a número
  });
};


  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({
      ...product,
      id: product.id || Date.now(), // Usa ID manual o genera uno automático
      precioConDescuento: product.precioUnitario * (1 - product.descuento / 100),
      estado: true,
    });
    setProduct({ id: "", nombre: "", marca: "", descripcion: "", precioUnitario: "", descuento: "", stock: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input type="number" name="id" placeholder="ID (Opcional)" value={product.id} onChange={handleChange} />
      <input type="text" name="nombre" placeholder="Nombre" value={product.nombre} onChange={handleChange} required />
      <input type="text" name="marca" placeholder="Marca" value={product.marca} onChange={handleChange} required />
      <textarea name="descripcion" placeholder="Descripción" value={product.descripcion} onChange={handleChange} required />
      <input type="number" name="precioUnitario" placeholder="Precio" value={product.precioUnitario} onChange={handleChange} required />
      <input type="number" name="descuento" placeholder="Descuento (%)" value={product.descuento} onChange={handleChange} required />
      <input type="number" name="stock" placeholder="Stock" value={product.stock} onChange={handleChange} required />
      <button type="submit">Agregar Producto</button>
    </form>
  );
}

export default ProductForm;
