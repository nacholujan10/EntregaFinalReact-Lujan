import carrito from "../assets/carrito-de-compras.png";

export const CartWidget = () => {
  return (
    <>
      <img src={carrito} height={26} />
      <span>5</span>
    </>
  );
};
