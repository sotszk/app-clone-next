import { useEffect, useLayoutEffect, useState } from "react";
import { Product } from "@prisma/client";
import Layout from "@/layouts/LayoutDefault";
import { ApiError } from "@/types/Error";
import useIsOnline from "@/hooks/useIsOnline";

const getProducts = async () => {
  try {
    const response = await fetch("/api/products");
    if (response.ok) {
      const json = await response.json();
      return json as { data: Product[] };
    } else {
      throw { msg: response.statusText, status: response.status };
    }
  } catch (err: unknown) {
    throw { msg: "システムエラー", status: 500 };
  }
};

const ProductsIndex = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    console.log("useEffect のエフェクトが実行された");
    getProducts()
      .then(({ data }) => {
        setProducts(data || []);
      })
      .catch(({ msg, status }: ApiError) => {
        console.error({ msg, status });
        setError({ msg, status });
      });
  }, []);

  // useLayout はブラウザの Painting を Block する
  // @see https://beta.reactjs.org/reference/react/useLayoutEffect#examples
  useLayoutEffect(() => {
    // Do something but it will block browser painting
  }, []);

  const isOnline = useIsOnline();

  return (
    <Layout title="製品一覧">
      <h1>Products</h1>

      <div>
        {products.length > 0 && (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <a href={`/products/${product.id}`}>{product.name}</a>
              </li>
            ))}
          </ul>
        )}
        {error && (
          <p style={{ color: "red" }}>
            ERROR: {error.msg}, ステータス {error.status}
          </p>
        )}
      </div>
      <div>IsOnline?: {isOnline ? "OnLine" : "OffLine"}</div>
    </Layout>
  );
};

export default ProductsIndex;
