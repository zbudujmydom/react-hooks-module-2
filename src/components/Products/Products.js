import { useEffect, useState } from "react";
import { EmptyListing } from "./components/EmptyListing/EmptyListing";
import { Listing } from "./components/Listing/Listing";
import { Loader } from "./components/Loader/Loader";
import { ErrorInfo } from "./components/ErrorInfo/ErrorInfo";

const url = "https://dummyjson.com/products/category/sports-accessories";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          return Promise.reject();
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch(() => {
        setShowError(true);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  if (isFetching) {
    return <Loader />;
  }

  if (!isFetching && showError) {
    return <ErrorInfo />;
  }

  return (
    <section>
      <h2>Smartphones:</h2>
      {products.length === 0 ? <EmptyListing /> : <Listing items={products} />}
    </section>
  );
};
