import { useEffect, useState } from "react";
import { Product } from "@prisma/client";
import Layout from "@/layouts/LayoutDefault";
import { ApiError } from "@/types/Error";
import useIsOnline from "@/hooks/useIsOnline";
import Card from "@/components/Card";

import * as styles from "./index.css";

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

  // useLayoutEffect はブラウザの Painting を Block する
  // @see https://beta.reactjs.org/reference/react/useLayoutEffect#examples
  // また、useLayoutEffect は SSR と併用するとクライアントとサーバーのミスマッチを招くため、`ClientOnly` なコンポーネント内でのみの使用が推奨される（コンソールの Warning より）

  const isOnline = useIsOnline();

  return (
    <Layout title="製品一覧">
      <h1>Products</h1>

      <div className={styles.content}>
        {products.length > 0 && (
          <ul className={styles.cards}>
            {products.map((product) => (
              <li key={product.id}>
                <Card
                  id={product.id}
                  title={product.name}
                  description={product.description}
                  url={`/products/${product.id}`}
                />
              </li>
            ))}
          </ul>
        )}
        {error && (
          <p className={styles.errorMessage}>
            ERROR: {error.msg}, ステータス {error.status}
          </p>
        )}
      </div>
      <div className={styles.onlineStatus}>
        IsOnline?: {isOnline ? "OnLine" : "OffLine"}
      </div>
    </Layout>
  );
};

export default ProductsIndex;
