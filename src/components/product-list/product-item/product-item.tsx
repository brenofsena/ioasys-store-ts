import { formatCurrency } from "utils/helpers";
import * as S from "./styles";

type Props = {
  id: string;
  title: string;
  images: Array<{ url: string }>;
  productVariants: Array<{ price: number }>;
};

const ProductItem = ({ id, title, images, productVariants }: Props) => {
  return (
    <S.ProductItem key={id}>
      <S.ProductImage
        data-testid="image"
        src={images[0].url}
        alt={title}
        title={title}
      />
      <S.ProductInfo>
        <S.ProductTitle data-testid="title">{title}</S.ProductTitle>
        <S.ProductPrice data-testid="price">
          {formatCurrency(productVariants[0].price)}
        </S.ProductPrice>
        <S.ProductActions>
          <S.ProductBuyButton>Adicionar</S.ProductBuyButton>
        </S.ProductActions>
      </S.ProductInfo>
    </S.ProductItem>
  );
};

export default ProductItem;
