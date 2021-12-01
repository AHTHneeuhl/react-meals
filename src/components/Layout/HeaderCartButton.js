import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [highlighted, setHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numOfCartItems = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  const btnStyles = `${styles.button} ${highlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) return;
    setHighlighted(true);

    const timer = setTimeout(() => {
      setTimeout(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [items]);

  return (
    <button className={btnStyles} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
