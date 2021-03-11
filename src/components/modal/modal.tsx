import * as S from "./styles";

type Props = {
  children: JSX.Element;
  open: boolean;
  close: () => void;
};

const Modal = ({ children, open, close }: Props) => {
  return (
    open && (
      <S.ModalWrapper data-testid="modal">
        <S.ModalFade onClick={() => close()} data-testid="modal-fade" />
        <S.ModalContent data-testid="modal-content">{children}</S.ModalContent>
      </S.ModalWrapper>
    )
  );
};

export default Modal;
