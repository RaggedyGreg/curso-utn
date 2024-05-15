import { useContext } from "react";
import { productsContext } from "../../context/ProductsContext";
import * as utils from "../../utils/utils";
import { Link } from "react-router-dom";
function Cart() {
  const { cart, removeFromCart } = useContext(productsContext);
  const derivedCart = utils.getDerivedCart(cart);
  return (
    <article>
      {derivedCart.map((item) => (
        <p onClick={() => removeFromCart(item.id)}>
          {item.name} - {item.quantity} - {item.totalPrice}
        </p>
      ))}
      <Link to={-1}>Back</Link>
    </article>
  );
}

export default Cart;
