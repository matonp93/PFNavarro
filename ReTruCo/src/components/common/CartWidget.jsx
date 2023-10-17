import { BsCart2 } from "react-icons/bs";
import '../common/CartWidget.css'

const CartWidget = () => {
  return (
    <>
      <BsCart2 className="BsCart2"/>
      <span>0</span>
    </>
  );
};

export default CartWidget;
