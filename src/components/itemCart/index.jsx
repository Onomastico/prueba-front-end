import { addToCart, removeFromCart } from "../../actions/cartActions";
import {formatCurrency} from "../../util";

import styles from "./styles.module.scss";

export const ItemCart = ({ item,  }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  // const { editItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
  const { amount } = item;

  return (
    <div className={styles.cartItem}>
      <img src={item.img} alt={item.name} />
      <div className={styles.dataContainer}>
        <div className={styles.left}>
          <p>{item.name}</p>
          <div className={styles.buttons}>
            <button onClick={() => addToCart(item._id, "add", amount)}>
              AGREGAR
            </button>
            <button onClick={() => removeFromCart(item._id, "del", amount)}>
              SACAR
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <div>{item.amount}</div>
          <p>Total: {formatCurrency(item.amount * item.price)}</p>
        </div>
      </div>
    </div>
  );
};