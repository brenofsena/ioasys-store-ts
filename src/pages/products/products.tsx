import * as S from "./styles";
import { Header, Footer, Cart, Spinner, ProductList } from "components";
import { useAtom } from "jotai";
import { fetchProductAtom } from "store/products";
import { useEffect } from "react";

const Products = () => {
  const [data, fetch] = useAtom(fetchProductAtom);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <S.ProductsWrapper>
      <Header />
      <S.Section>
        {data.isLoading ? (
          <Spinner />
        ) : (
          data.products?.map(({ categoryTitle, products }, index) => (
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
