import * as S from "./styles";
import { useEffect } from "react";
import { Header, Footer, Cart, Spinner, ProductList } from "components";
import { useProductStore } from "store/products";

const Products = () => {
  const { getProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <S.ProductsWrapper>
      <Header />
      <S.Section>
        {isLoading ? (
          <Spinner />
        ) : (
          products?.map(({ categoryTitle, products }, index) => (
            <ProductList
              key={index}
              categoryTitle={categoryTitle}
              products={products}
            />
          ))
        )}
      </S.Section>
      <Cart />
      <Footer />
    </S.ProductsWrapper>
  );
};

export default Products;
