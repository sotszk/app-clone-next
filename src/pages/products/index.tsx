import { useEffect, useState } from "react";
import { Product } from "@prisma/client";
import Layout from "@/layouts/LayoutDefault";

const getProducts = async () => {
  try {
    const response = await fetch("/api/products");
    const json = await response.json();
    return json as { data: Product[] };
  } catch (err) {
    throw new Error(err);
  }
};

const ProductsIndex = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then(({ data }) => {
        setProducts(data || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout title="製品一覧">
      <h1>Products</h1>

      <div>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <a href={`/products/${product.id}`}>{product.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default ProductsIndex;
