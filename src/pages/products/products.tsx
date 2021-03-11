import * as S from "./styles";
import { useEffect } from "react";
import { Header, Footer, Cart, Spinner, ProductList } from "components";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCTS, ProductState } from "store/slices/productSlice";

type Store = {
  product: ProductState;
};

const Products = () => {
  const dispatch = useDispatch();

  const { products, isLoading } = useSelector<Store, ProductState>(
    ({ product }) => product
  );

  useEffect(() => {
    dispatch(GET_PRODUCTS());
  }, [dispatch]);

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
