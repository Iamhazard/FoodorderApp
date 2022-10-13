import classes from "./HeaderCardButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext ,useEffect, useState } from "react";
import CartContext from "../../store/Cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHiglited,setBtnIsHigilited]=useState(false);
  const cartCtx = useContext(CartContext);

  const {items}=cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
 

  const btnClasses=`${classes.button} ${btnIsHiglited ? classes.bump: ''}`;

  useEffect(()=>{
  if(cartCtx.items.length ===0){
    return;
  }
setBtnIsHigilited(true);
const timer =setTimeout(()=>{
  setBtnIsHigilited(false);
},300);

return ()=>{
  clearTimeout(timer);
};
},[items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;